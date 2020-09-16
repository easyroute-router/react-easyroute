import React, { Component, ReactElement } from 'react'
import { EasyrouteContext } from './RouterOutlet'
import Router from 'easyroute-core/lib/dist'

interface EasyrouteProviderProps {
  router: Router
}

function EasyrouteProvider(props: any): ReactElement {
  return <EasyrouteContext.Provider value={{ router: props.router, nestingDepth: 0 }} {...props} />
}

export { EasyrouteProvider }
