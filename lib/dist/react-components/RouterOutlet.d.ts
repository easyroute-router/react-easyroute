import { Component } from "react";
declare class RouterOutlet extends Component<any, any> {
    constructor(props: any);
    state: {
        component: JSX.Element;
    };
    matchedSubscribe(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export { RouterOutlet };
