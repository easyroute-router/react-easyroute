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
var EasyrouteContext = react_1.createContext(0);
exports.EasyrouteContext = EasyrouteContext;
var EasyrouteProvider = /** @class */ (function (_super) {
    __extends(EasyrouteProvider, _super);
    function EasyrouteProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EasyrouteProvider.prototype.render = function () {
        return (react_1.default.createElement(EasyrouteContext.Provider, { value: 0 }, this.props.children));
    };
    return EasyrouteProvider;
}(react_1.Component));
exports.default = EasyrouteProvider;
