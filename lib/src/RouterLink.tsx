import React, { PropsWithChildren, useContext } from 'react'
import { EasyrouteContext } from './RouterOutlet'
import { RouterLinkProps } from './types'

const RouterLink: React.FC<RouterLinkProps> = (props: PropsWithChildren<RouterLinkProps>) => {
  const { router } = useContext(EasyrouteContext)
  const className = props.className ? ' ' + props.className : ''
  const routerNavigate = (evt: React.MouseEvent): void => {
    evt.preventDefault()
    evt.stopPropagation()
    if (!router) throw new Error('[Easyroute] Router instance not found in RouterLink')
    const resultPath = props.to[0] === '/' ? props.to : `/${props.to}`
    router.push(resultPath)
  }

  return (
    <a className={`router-link${className}`} href={props.to} onClick={(evt) => routerNavigate(evt)}>
      {props.children}
    </a>
  )
}

export { RouterLink }
