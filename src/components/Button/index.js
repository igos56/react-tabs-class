import { Component } from "react";

import "./styles.scss";

class Button extends Component {
    render () {
        return (
            <button className="btn" onClick={(event) => this.props.changeTab(event)}>{this.props.tabName}</button>
        );
    }
}

export default Button;