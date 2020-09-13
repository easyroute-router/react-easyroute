import React, { Component } from "react";
import Router from "..";
export interface EasyrouteContextValue {
    router?: Router;
    nestingDepth: number;
}
declare const EasyrouteContext: React.Context<EasyrouteContextValue>;
declare class RouterOutlet extends Component<any, any> {
    private nestingDepth;
    private router;
    private unsubscribe;
    constructor(props: any, context: EasyrouteContextValue);
    state: {
        component: string;
    };
    matchedSubscribe(matchedRoutes: any[]): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export { RouterOutlet, EasyrouteContext };
