import React, { Component } from 'react'

export class Eventhandler extends Component {
    constructor(){
        super()
        this.state={
            fullname:'',
        }
        this.onchangemethod=this.onchangemethod.bind(this);
    }
    onchangemethod(event){
        console.log(event.target.value)
        this.setState=({
            fullname:event.target.value
        });
    }
  render() {
    return (
      <div>
        <h3>In JavaScript, an event handler is a function that is designed to respond to specific events that occur within a web page or application. These events can be triggered by user interactions (such as clicking a button, moving the mouse, or pressing a key) or by other sources like timers and network requests. Event handlers are used to define what should happen when a particular event occurs.</h3>
        <h1>this is event handler</h1>
        <input type='text' placeholder='name' value={this.state.fullname}  onChange={this.onchangemethod}/>
      </div>
    )
  }
}

export default Eventhandler
