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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
// @ts-ignore @todo: create declaration file for utils
var utils_1 = require("easyroute-core/lib/utils");
var EasyrouteContext = react_1.createContext({
    router: undefined,
    nestingDepth: 0
});
exports.EasyrouteContext = EasyrouteContext;
var RouterOutlet = /** @class */ (function (_super) {
    __extends(RouterOutlet, _super);
    function RouterOutlet(props, context) {
        var _a, _b;
        var _this = _super.call(this, props, context) || this;
        _this.unsubscribe = function () { return null; };
        _this.prevRouteId = '';
        _this.state = {
            component: '',
            transitionClassName: ''
        };
        _this.matchedSubscribe = function (matchedRoutes) { return __awaiter(_this, void 0, void 0, function () {
            var currentRoute, component, isClassComponent, Component_1, e_1;
            var _this = this;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        currentRoute = matchedRoutes.find(function (route) { return route.nestingDepth === _this.nestingDepth; });
                        if (!currentRoute) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getDynamicComponent(currentRoute.component)];
                    case 1:
                        component = (_a = _d.sent(), (_a !== null && _a !== void 0 ? _a : currentRoute.component));
                        isClassComponent = !!((_c = (_b = component) === null || _b === void 0 ? void 0 : _b.prototype) === null || _c === void 0 ? void 0 : _c.render);
                        Component_1 = isClassComponent ? new component(this.componentProps) : component;
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.changeComponent(Component_1, isClassComponent, currentRoute.id)];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _d.sent();
                        this.currentComponent = "[Easyroute] Error changing component: " + e_1.message;
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.currentComponent = '';
                        _d.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.nestingDepth = _this.context.nestingDepth;
        _this.router = (_a = _this.context.router, (_a !== null && _a !== void 0 ? _a : _this.props.router));
        _this.forceRemount = (_b = props.forceRemount, (_b !== null && _b !== void 0 ? _b : false));
        _this.transitionData = props.transition ? utils_1.getTransitionDurations(props.transition) : null;
        return _this;
    }
    Object.defineProperty(RouterOutlet.prototype, "componentProps", {
        get: function () {
            return {
                router: this.router,
                currentRoute: this.router.currentRoute
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "transitionClassName", {
        get: function () {
            return this.state.transitionClassName;
        },
        set: function (value) {
            this.setState({
                transitionClassName: value
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "className", {
        get: function () {
            var className = this.props.className;
            return className ? ' ' + className : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "classList", {
        get: function () {
            var classListArray = ['easyroute-outlet'];
            if (this.className)
                classListArray.push(this.className);
            if (this.transitionClassName)
                classListArray.push(this.transitionClassName);
            return classListArray.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "currentComponent", {
        get: function () {
            return this.state.component;
        },
        set: function (component) {
            this.setState({
                component: component
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterOutlet.prototype.changeComponent = function (Component, isClassComponent, currentRouteId) {
        return __awaiter(this, void 0, void 0, function () {
            var transition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.prevRouteId === currentRouteId && !this.forceRemount)
                            return [2 /*return*/];
                        transition = this.props.transition;
                        if (!!this.transitionData) return [3 /*break*/, 1];
                        this.currentComponent = isClassComponent ? Component.render() : react_1.default.createElement(Component, __assign({}, this.componentProps));
                        return [3 /*break*/, 5];
                    case 1:
                        this.transitionClassName = transition + "-leave-active " + transition + "-leave-to";
                        return [4 /*yield*/, utils_1.delay(this.transitionData.leavingDuration + 10)];
                    case 2:
                        _a.sent();
                        this.transitionClassName = transition + "-leave-active " + transition + "-leave-to " + transition + "-leave";
                        return [4 /*yield*/, utils_1.delay(5)];
                    case 3:
                        _a.sent();
                        this.transitionClassName = transition + "-enter";
                        this.transitionClassName = transition + "-enter-active";
                        this.currentComponent = isClassComponent ? Component.render() : react_1.default.createElement(Component, __assign({}, this.componentProps));
                        this.transitionClassName = transition + "-enter-active " + transition + "-enter-to";
                        return [4 /*yield*/, utils_1.delay(this.transitionData.enteringDuration + 10)];
                    case 4:
                        _a.sent();
                        this.transitionClassName = '';
                        _a.label = 5;
                    case 5:
                        this.prevRouteId = currentRouteId;
                        return [2 /*return*/];
                }
            });
        });
    };
    RouterOutlet.prototype.getDynamicComponent = function (component) {
        return __awaiter(this, void 0, void 0, function () {
            var _component, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, component()];
                    case 1:
                        _component = _a.sent();
                        return [2 /*return*/, _component.hasOwnProperty('default') ? _component.default : null];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RouterOutlet.prototype.componentDidMount = function () {
        this.unsubscribe = this.router.currentMatched.subscribe(this.matchedSubscribe);
    };
    RouterOutlet.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    RouterOutlet.prototype.render = function () {
        return (react_1.default.createElement(EasyrouteContext.Provider, { value: { router: this.router, nestingDepth: this.nestingDepth + 1 } },
            react_1.default.createElement("div", { className: this.classList }, this.currentComponent)));
    };
    return RouterOutlet;
}(react_1.Component));
exports.RouterOutlet = RouterOutlet;
RouterOutlet.contextType = EasyrouteContext;
