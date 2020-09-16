import React, { Component } from "react";
import {EasyrouteContextValue} from "./RouterOutlet";
import {EasyrouteContext} from "./RouterOutlet";
import Router from "easyroute-core";

interface RouterLinkProps {
    to: string
    className?: string
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
        let resultPath = this.props.to[0] === '/' ? this.props.to : `/${this.props.to}`
        this.router.navigate(resultPath)
    }

    get className() {
        const { className } = this.props
        return className ? ' ' + className : ''
    }

    render() {
        return (
            <a className={`router-link${ this.className }`} href={this.props.to} onClick={(evt) => this.routerNavigate(evt)}>
                { this.props.children }
            </a>
        )
    }
}

RouterLink.contextType = EasyrouteContext

export {RouterLink}