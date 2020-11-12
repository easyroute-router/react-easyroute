"use strict";
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
var RouterLink = function (props) {
    var router = react_1.useContext(RouterOutlet_1.EasyrouteContext).router;
    var className = props.className ? ' ' + props.className : '';
    var routerNavigate = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (!router)
            throw new Error('[Easyroute] Router instance not found in RouterLink');
        var resultPath = props.to[0] === '/' ? props.to : "/" + props.to;
        router.push(resultPath);
    };
    return (react_1.default.createElement("a", { className: "router-link" + className, href: props.to, onClick: function (evt) { return routerNavigate(evt); } }, props.children));
};
exports.RouterLink = RouterLink;
