import React, { Component } from "react";
import Router from "easyroute-core";
export interface EasyrouteContextValue {
    router?: Router;
    nestingDepth: number;
}
declare const EasyrouteContext: React.Context<EasyrouteContextValue>;
declare class RouterOutlet extends Component<any, any> {
    private readonly nestingDepth;
    private readonly router;
    private unsubscribe;
    constructor(props: any, context: EasyrouteContextValue);
    state: {
        component: string;
    };
    private matchedSubscribe;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export { RouterOutlet, EasyrouteContext };
