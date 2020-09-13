import React, {Component, createContext} from "react";
import Router from "..";

export interface EasyrouteContextValue {
    router?: Router
    nestingDepth: number
}

const EasyrouteContext = createContext<EasyrouteContextValue>({
    router: undefined,
    nestingDepth: 0
})

class RouterOutlet extends Component<any, any> {
    private nestingDepth: number
    private router: Router
    private unsubscribe: any

    constructor(props: any, context: EasyrouteContextValue) {
        super(props, context);
        this.nestingDepth = this.context.nestingDepth
        this.router = this.context.router ?? this.props.router
    }

    state = {
        component: ''
    }

    matchedSubscribe(matchedRoutes: any[]) {
        const currentRoute = matchedRoutes.find(route => route.nestingDepth === this.nestingDepth)
        if (currentRoute) {
            const component = currentRoute.component
            const Component = new component()
            this.setState({
                component: Component.render ? Component.render() : component()
            })
        } else {
            this.setState({
                component: ''
            })
        }
    }

    componentDidMount() {
        // this.matchedSubscribe(this.router.currentMatched.getValue)
        this.unsubscribe = this.router.currentMatched.subscribe(this.matchedSubscribe.bind(this))
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <EasyrouteContext.Provider value={{ router: this.router, nestingDepth: this.nestingDepth + 1 }}>
                { this.state.component }
            </EasyrouteContext.Provider>
        );
    }
}

RouterOutlet.contextType = EasyrouteContext

export { RouterOutlet, EasyrouteContext }