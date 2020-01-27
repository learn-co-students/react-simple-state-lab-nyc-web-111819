import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(prop) {
        super()
        this.state = {
            color: prop.value
        }
    }


    changeColorState = () => {
        const newColor = this.state.color = '#333'
        this.setState({
        color: newColor
    })
    }


    render() {
        return (
            <div onClick={this.changeColorState} className="cell" style={{backgroundColor: this.state.color}}>
                {this.state.color}
            </div>
        )
    }
}

