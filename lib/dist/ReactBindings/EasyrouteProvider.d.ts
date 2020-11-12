import React, { ReactElement } from 'react';
import { EasyrouteProviderProps, EasyrouteContextValue } from './types';
declare const EasyrouteContext: React.Context<EasyrouteContextValue>;
declare function EasyrouteProvider(props: EasyrouteProviderProps): ReactElement;
export { EasyrouteProvider, EasyrouteContext };
