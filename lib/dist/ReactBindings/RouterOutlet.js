"use strict";
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
var utils_1 = require("/Users/alexeysolovjov/CODE/Github/easyroute-all/react-easyroute/lib/dist/easyroute-core/lib/utils");
var EasyrouteProvider_1 = require("./EasyrouteProvider");
exports.EasyrouteContext = EasyrouteProvider_1.EasyrouteContext;
var RouterOutlet = function (props) {
    var _a, _b;
    var context = react_1.useContext(EasyrouteProvider_1.EasyrouteContext);
    var router = (_a = context.router, (_a !== null && _a !== void 0 ? _a : props.router));
    var nestingDepth = (_b = context.nestingDepth, (_b !== null && _b !== void 0 ? _b : 0));
    var forceRemount = props.forceRemount, transition = props.transition;
    var transitionData = props.transition ? utils_1.getTransitionDurations(props.transition) : null;
    var _c = react_1.useState(''), component = _c[0], setComponent = _c[1];
    var _d = react_1.useState(''), prevRouteId = _d[0], setPrevRouteId = _d[1];
    var _e = react_1.useState(''), transitionClassName = _e[0], setTransitionClassName = _e[1];
    if (!router)
        throw new Error('[Easyroute] Router instance not found in RouterOutlet');
    var getComponentProps = function () { return ({ router: router, currentRoute: router.currentRoute }); };
    var changeComponent = function (Component, isClassComponent, currentRouteId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (prevRouteId === currentRouteId && !forceRemount)
                        return [2 /*return*/];
                    if (!!transitionData) return [3 /*break*/, 1];
                    setComponent(isClassComponent ? Component.render() : react_1.default.createElement(Component, __assign({}, getComponentProps())));
                    return [3 /*break*/, 5];
                case 1:
                    setTransitionClassName(transition + "-leave-active " + transition + "-leave-to");
                    return [4 /*yield*/, utils_1.delay(transitionData.leavingDuration + 10)];
                case 2:
                    _a.sent();
                    setTransitionClassName(transition + "-leave-active " + transition + "-leave-to " + transition + "-leave");
                    return [4 /*yield*/, utils_1.delay(5)];
                case 3:
                    _a.sent();
                    setTransitionClassName(transition + "-enter");
                    setTransitionClassName(transition + "-enter-active");
                    setComponent(isClassComponent ? Component.render() : react_1.default.createElement(Component, __assign({}, getComponentProps())));
                    setTransitionClassName(transition + "-enter-active " + transition + "-enter-to");
                    return [4 /*yield*/, utils_1.delay(transitionData.enteringDuration + 10)];
                case 4:
                    _a.sent();
                    setTransitionClassName('');
                    _a.label = 5;
                case 5:
                    setPrevRouteId(currentRouteId);
                    return [2 /*return*/];
            }
        });
    }); };
    var subscribeHandler = function () {
        return router.currentMatched.subscribe(function (matchedRoutes) { return __awaiter(void 0, void 0, void 0, function () {
            var currentRoute, component_1, isClassComponent, Component, e_1;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        currentRoute = matchedRoutes.find(function (route) { return route.nestingDepth === nestingDepth; });
                        if (!currentRoute) return [3 /*break*/, 5];
                        component_1 = currentRoute.component;
                        isClassComponent = !!((_b = (_a = component_1) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b.render);
                        Component = isClassComponent ? new component_1(getComponentProps()) : component_1;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, changeComponent(Component, isClassComponent, currentRoute.id)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        setComponent("[Easyroute] Error changing component: " + e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        setComponent('');
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    react_1.useEffect(function () {
        var unsubscribe = subscribeHandler();
        return function () { return unsubscribe(); };
    }, []);
    var classList = function () {
        var classListArray = ['easyroute-outlet'];
        if (props.className)
            classListArray.push(props.className);
        if (transitionClassName)
            classListArray.push(transitionClassName);
        return classListArray.join(' ');
    };
    return (react_1.default.createElement(EasyrouteProvider_1.EasyrouteContext.Provider, { value: { router: router, nestingDepth: nestingDepth + 1 } },
        react_1.default.createElement("div", { className: classList() }, component)));
};
exports.RouterOutlet = RouterOutlet;
