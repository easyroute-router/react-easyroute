import React, { Component } from "react";
import {RouterOutlet} from "./react-easyroute";

export default class Test1_1 extends Component<any, any>{
    render() {
        return (
            <div>
                <h1>Test1 NESTED component</h1>
                <RouterOutlet />
            </div>
        );
    }
}
