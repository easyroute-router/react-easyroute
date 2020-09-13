"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var EasyrouteContext = react_1.createContext({
    router: undefined,
    nestingDepth: 0
});
exports.EasyrouteContext = EasyrouteContext;
var RouterOutlet = /** @class */ (function (_super) {
    __extends(RouterOutlet, _super);
    function RouterOutlet(props, context) {
        var _a;
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            component: ''
        };
        _this.nestingDepth = _this.context.nestingDepth;
        _this.router = (_a = _this.context.router, (_a !== null && _a !== void 0 ? _a : _this.props.router));
        return _this;
    }
    RouterOutlet.prototype.matchedSubscribe = function (matchedRoutes) {
        var _this = this;
        var currentRoute = matchedRoutes.find(function (route) { return route.nestingDepth === _this.nestingDepth; });
        if (currentRoute) {
            var component = currentRoute.component;
            var Component_1 = new component();
            this.setState({
                component: Component_1.render ? Component_1.render() : component()
            });
        }
        else {
            this.setState({
                component: ''
            });
        }
    };
    RouterOutlet.prototype.componentDidMount = function () {
        // this.matchedSubscribe(this.router.currentMatched.getValue)
        this.unsubscribe = this.router.currentMatched.subscribe(this.matchedSubscribe.bind(this));
    };
    RouterOutlet.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    RouterOutlet.prototype.render = function () {
        return (react_1.default.createElement(EasyrouteContext.Provider, { value: { router: this.router, nestingDepth: this.nestingDepth + 1 } }, this.state.component));
    };
    return RouterOutlet;
}(react_1.Component));
exports.RouterOutlet = RouterOutlet;
RouterOutlet.contextType = EasyrouteContext;
