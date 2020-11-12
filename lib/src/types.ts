import Router from "../dist/easyroute-core/lib/dist";
import {ReactElement} from "react";

export interface EasyrouteProviderProps {
    router: Router
    children?: ReactElement
}

export interface RouterLinkProps {
    to: string
    className?: string
}

export interface RouterOutletProps {
    router?: Router
    transition?: string
    forceRemount?: boolean
    className?: string
}

export interface EasyrouteContextValue {
    router?: Router
    nestingDepth?: number
}

export type ReactEasyrouteComponent = any