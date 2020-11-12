import React, { createContext, ReactElement } from 'react'
import { EasyrouteProviderProps, EasyrouteContextValue } from './types'

const EasyrouteContext = createContext<EasyrouteContextValue>({
  router: undefined,
  nestingDepth: 0
})

function EasyrouteProvider(props: EasyrouteProviderProps): ReactElement {
  return <EasyrouteContext.Provider value={{ router: props.router, nestingDepth: 0 }} {...props} />
}

export { EasyrouteProvider, EasyrouteContext }
