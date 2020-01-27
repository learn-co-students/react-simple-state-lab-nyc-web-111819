import React, { Component } from 'react'

export default class Cell extends Component {

  constructor(props){
    super()
    this.state = {color: props.value}
  }

  eventListener = () => {
    this.setState({color: '#333'})
  }

  render(){
    return (
      <div 
        className="cell" 
        onClick={this.eventListener}
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}