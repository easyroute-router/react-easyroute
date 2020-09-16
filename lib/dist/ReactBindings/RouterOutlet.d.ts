import React, { Component } from 'react'
import Router from 'easyroute-core'
interface RouterOutletProps {
  router?: Router
  transition?: string
  forceRemount?: boolean
  className?: string
}
export interface EasyrouteContextValue {
  router?: Router
  nestingDepth?: number
}
declare const EasyrouteContext: React.Context<EasyrouteContextValue>
declare class RouterOutlet extends Component<RouterOutletProps, any> {
  private readonly nestingDepth
  private readonly router
  private readonly transitionData
  private readonly forceRemount
  private unsubscribe
  private prevRouteId
  state: {
    component: string
    transitionClassName: string
  }
  constructor(props: RouterOutletProps, context: EasyrouteContextValue)
  get componentProps(): {
    router: Router
    currentRoute: import('easyroute-core/lib/dist/Router/types').RouteObject
  }
  get transitionClassName(): string
  set transitionClassName(value: string)
  get className(): string
  get classList(): string
  get currentComponent(): any
  set currentComponent(component: any)
  changeComponent(Component: any, isClassComponent: boolean, currentRouteId: string): Promise<void>
  private getDynamicComponent
  private matchedSubscribe
  componentDidMount(): void
  componentWillUnmount(): void
  render(): JSX.Element
}
export { RouterOutlet, EasyrouteContext }
