import { Component } from "react";
import { EasyrouteContextValue } from "./RouterOutlet";
interface RouterLinkProps {
    to: string;
}
declare class RouterLink extends Component<RouterLinkProps, any> {
    private readonly router;
    constructor(props: RouterLinkProps, context: EasyrouteContextValue);
    private routerNavigate;
    render(): JSX.Element;
}
export { RouterLink };
