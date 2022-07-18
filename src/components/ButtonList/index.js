import { Component } from "react";
import Button from "../Button";

class ButtonList extends Component {
    render () {
        return (
            <div className="btn-list">
                <Button
                    tabName = {"Новости спорта"}
                    changeTab = {(event) => this.props.changeTab(event)}
                />
                <Button
                    tabName = {"Новости культуры"}
                    changeTab = {(event) => this.props.changeTab(event)}
                />
                <Button
                    tabName = {"Во что поиграть?"}
                    changeTab = {(event) => this.props.changeTab(event)}
                />
                <Button
                    tabName = {"Что почитать?"}
                    changeTab = {(event) => this.props.changeTab(event)}
                />
            </div> 
        );
    }
}

export default ButtonList;