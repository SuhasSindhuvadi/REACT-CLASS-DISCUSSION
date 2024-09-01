import React, { Component } from 'react'

export default class GreetClass extends Component {
    constructor() {
        super()
        this.state={
            message:"Welcome to React JS Class"
        }    
    }
    changeMsg=()=>{
        this.setState(this.setState({message:"Thank you for attending React JS Class"}))
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMsg()}>Click Here to Change Message</button>
      </div>
    )
  }
}