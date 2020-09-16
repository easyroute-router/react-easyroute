import React, {Component, createContext} from "react";
import Router from "easyroute-core";
// @ts-ignore @todo: create declaration file for utils
import { getTransitionDurations, delay } from 'easyroute-core/lib/utils'

interface RouterOutletProps {
    router?: Router
    transition?: string
    forceRemount?: boolean
    className?: string
}

export interface EasyrouteContextValue {
    router?: Router
    nestingDepth: number
}

const EasyrouteContext = createContext<EasyrouteContextValue>({
    router: undefined,
    nestingDepth: 0
})

class RouterOutlet extends Component<RouterOutletProps, any> {
    private readonly nestingDepth: number
    private readonly router: Router
    private readonly transitionData: any
    private readonly forceRemount: boolean

    private unsubscribe: () => void = () => null
    private prevRouteId = ''

    public state = {
        component: '',
        transitionClassName: ''
    }

    constructor(props: RouterOutletProps, context: EasyrouteContextValue) {
        super(props, context);
        this.nestingDepth = this.context.nestingDepth
        this.router = this.context.router ?? this.props.router
        this.forceRemount = props.forceRemount ?? false
        this.transitionData = props.transition ? getTransitionDurations(props.transition) : null
    }

    get componentProps() {
        return {
            router: this.router,
            currentRoute: this.router.currentRoute
        }
    }

    get transitionClassName() {
        return this.state.transitionClassName
    }

    set transitionClassName(value: string) {
        this.setState({
            transitionClassName: value
        })
    }

    get className() {
        const { className } = this.props
        return className ? ' ' + className : ''
    }

    get classList() {
        const classListArray = ['easyroute-outlet']
        if (this.className) classListArray.push(this.className)
        if (this.transitionClassName) classListArray.push(this.transitionClassName)
        return classListArray.join(' ')
    }

    get currentComponent() {
        return this.state.component
    }

    set currentComponent(component: any) {
        this.setState({
            component
        })
    }

    async changeComponent(Component: any, isClassComponent: boolean, currentRouteId: string) {
        if (this.prevRouteId === currentRouteId && !this.forceRemount) return
        const transition = this.props.transition
        if (!this.transitionData) {
            this.currentComponent = isClassComponent ? Component.render() : <Component {...this.componentProps} />
        } else {
            this.transitionClassName = `${transition}-leave-active ${transition}-leave-to`
            await delay(this.transitionData.leavingDuration + 10)
            this.transitionClassName = `${transition}-leave-active ${transition}-leave-to ${transition}-leave`
            await delay(5)
            this.transitionClassName = `${transition}-enter`
            this.transitionClassName = `${transition}-enter-active`
            this.currentComponent = isClassComponent ? Component.render() : <Component {...this.componentProps} />
            this.transitionClassName = `${transition}-enter-active ${transition}-enter-to`
            await delay(this.transitionData.enteringDuration + 10)
            this.transitionClassName = ''
        }
        this.prevRouteId = currentRouteId
    }

    private async getDynamicComponent(component: any): Promise<any> {
        try {
            const _component = await component()
            return _component.hasOwnProperty('default') ? _component.default : null;

        } catch (e) {
            return null
        }

    }

    private matchedSubscribe = async (matchedRoutes: any[]) => {
        const currentRoute = matchedRoutes.find(route => route.nestingDepth === this.nestingDepth)
        if (currentRoute) {
            const component = await this.getDynamicComponent(currentRoute.component) ?? currentRoute.component
            const isClassComponent = !!component?.prototype?.render
            const Component = isClassComponent ? new component(this.componentProps) : component
            try {
                await this.changeComponent(Component, isClassComponent, currentRoute.id)
            } catch (e) {
                this.currentComponent = `[Easyroute] Error changing component: ${e.message}`
            }
        } else {
            this.currentComponent = ''
        }
    }

    componentDidMount() {
        this.unsubscribe = this.router.currentMatched.subscribe(this.matchedSubscribe)
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <EasyrouteContext.Provider value={{ router: this.router, nestingDepth: this.nestingDepth + 1 }}>
                <div className={ this.classList }>
                    { this.currentComponent }
                </div>
            </EasyrouteContext.Provider>
        );
    }
}

RouterOutlet.contextType = EasyrouteContext

export { RouterOutlet, EasyrouteContext }