import React from "react";

export default class Newcomponent extends
React.Component{
    render() {
        return <div>Have a nice day { this.props.name }</div>
    }
}