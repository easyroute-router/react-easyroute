import React, { useContext, useEffect, useState } from 'react'
import {
  getTransitionDurations,
  delay
} from '/Users/alexeysolovjov/CODE/Github/easyroute-all/react-easyroute/lib/dist/easyroute-core/lib/utils'
import { EasyrouteContext } from './EasyrouteProvider'
import { ReactEasyrouteComponent, RouterOutletProps } from './types'
import { Route } from 'easyroute-core/lib/dist/types'

const RouterOutlet: React.FC<RouterOutletProps> = (props) => {
  const context = useContext(EasyrouteContext)
  const router = context.router ?? props.router
  const nestingDepth = context.nestingDepth ?? 0
  const { forceRemount, transition } = props
  const transitionData = props.transition ? getTransitionDurations(props.transition) : null
  const [component, setComponent] = useState('')
  const [prevRouteId, setPrevRouteId] = useState('')
  const [transitionClassName, setTransitionClassName] = useState('')
  if (!router) throw new Error('[Easyroute] Router instance not found in RouterOutlet')
  const getComponentProps = () => ({ router, currentRoute: router.currentRoute })

  const changeComponent = async (
    Component: ReactEasyrouteComponent,
    isClassComponent: boolean,
    currentRouteId: string
  ) => {
    if (prevRouteId === currentRouteId && !forceRemount) return
    if (!transitionData) {
      setComponent(isClassComponent ? Component.render() : <Component {...getComponentProps()} />)
    } else {
      setTransitionClassName(`${transition}-leave-active ${transition}-leave-to`)
      await delay(transitionData.leavingDuration + 10)
      setTransitionClassName(`${transition}-leave-active ${transition}-leave-to ${transition}-leave`)
      await delay(5)
      setTransitionClassName(`${transition}-enter`)
      setTransitionClassName(`${transition}-enter-active`)
      setComponent(isClassComponent ? Component.render() : <Component {...getComponentProps()} />)
      setTransitionClassName(`${transition}-enter-active ${transition}-enter-to`)
      await delay(transitionData.enteringDuration + 10)
      setTransitionClassName('')
    }
    setPrevRouteId(currentRouteId)
  }

  const subscribeHandler = () => {
    return router.currentMatched.subscribe(async (matchedRoutes: Route[]) => {
      const currentRoute = matchedRoutes.find((route) => route.nestingDepth === nestingDepth)
      if (currentRoute) {
        const component = currentRoute.component
        const isClassComponent = !!component?.prototype?.render
        const Component = isClassComponent ? new component(getComponentProps()) : component
        try {
          await changeComponent(Component, isClassComponent, currentRoute.id as string)
        } catch (e) {
          setComponent(`[Easyroute] Error changing component: ${e.message}`)
        }
      } else {
        setComponent('')
      }
    })
  }

  useEffect(() => {
    const unsubscribe = subscribeHandler()
    return () => unsubscribe()
  }, [])

  const classList = () => {
    const classListArray = ['easyroute-outlet']
    if (props.className) classListArray.push(props.className)
    if (transitionClassName) classListArray.push(transitionClassName)
    return classListArray.join(' ')
  }

  return (
    <EasyrouteContext.Provider value={{ router: router, nestingDepth: nestingDepth + 1 }}>
      <div className={classList()}>{component}</div>
    </EasyrouteContext.Provider>
  )
}

export { RouterOutlet, EasyrouteContext }
