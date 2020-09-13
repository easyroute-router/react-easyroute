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
var RouterOutlet_1 = require("./RouterOutlet");
var RouterLink = /** @class */ (function (_super) {
    __extends(RouterLink, _super);
    function RouterLink(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.router = _this.context.router;
        return _this;
    }
    RouterLink.prototype.routerNavigate = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (!this.router) {
            throw new Error('[Easyroute] Router instance not found in RouterLink');
        }
        this.router.navigate(this.props.to);
    };
    RouterLink.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("a", { href: this.props.to, onClick: function (evt) { return _this.routerNavigate(evt); } }, this.props.children));
    };
    return RouterLink;
}(react_1.Component));
exports.RouterLink = RouterLink;
RouterLink.contextType = RouterOutlet_1.EasyrouteContext;
