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
function EasyrouteProvider(props) {
    return react_1.default.createElement(EasyrouteContext.Provider, __assign({ value: { router: props.router, nestingDepth: 0 } }, props));
}
exports.EasyrouteProvider = EasyrouteProvider;
