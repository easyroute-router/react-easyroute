import React, { Component } from "react";
import Router from "easyroute-core";
interface RouterOutletProps {
    router?: Router;
    transition?: string;
    forceRemount?: boolean;
}
export interface EasyrouteContextValue {
    router?: Router;
    nestingDepth: number;
}
declare const EasyrouteContext: React.Context<EasyrouteContextValue>;
declare class RouterOutlet extends Component<RouterOutletProps, any> {
    private readonly nestingDepth;
    private readonly router;
    private readonly transitionData;
    private readonly forceRemount;
    private unsubscribe;
    private prevRouteId;
    constructor(props: RouterOutletProps, context: EasyrouteContextValue);
    state: {
        component: string;
        transitionClassName: string;
    };
    get componentProps(): {
        router: Router;
        currentRoute: import("easyroute-core/lib/dist/Router/types").RouteObject;
    };
    changeComponent(Component: any, isClassComponent: boolean, currentRouteId: string): Promise<void>;
    private matchedSubscribe;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export { RouterOutlet, EasyrouteContext };
