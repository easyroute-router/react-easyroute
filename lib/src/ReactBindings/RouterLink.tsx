import React, { Component } from "react";
import {EasyrouteContextValue} from "./RouterOutlet";
import {EasyrouteContext} from "./RouterOutlet";
import Router from "..";

interface RouterLinkProps {
    to: string
}

class RouterLink extends Component<RouterLinkProps, any> {
    private readonly router: Router

    constructor(props: RouterLinkProps, context: EasyrouteContextValue) {
        super(props, context);
        this.router = this.context.router
    }

    private routerNavigate(evt: any) {
        evt.preventDefault()
        evt.stopPropagation()
        if (!this.router) {
            throw new Error('[Easyroute] Router instance not found in RouterLink')
        }
        this.router.navigate(this.props.to)
    }

    render() {
        return (
            <a href={this.props.to} onClick={(evt) => this.routerNavigate(evt)}>
                { this.props.children }
            </a>
        )
    }
}

RouterLink.contextType = EasyrouteContext

export {RouterLink}