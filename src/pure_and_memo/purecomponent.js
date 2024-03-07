import React, { Component,PureComponent } from 'react'
import MemoComponent from './memo';

export class Purecomponent extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            usercount:1,
        };
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
        this.setState({
            usercount:this.state.usercount+1,
        });
    }
  render() {
    // console.log('****usercount*****')
    return (
      <div>
        {/* <h1>react purecomponent</h1> */}
        <h5>usercount={this.state.usercount}</h5>
        <button onClick={this.handleclick}>clickme</button>
        <MemoComponent usercount={this.state.usercount}></MemoComponent>

      </div>
    )
  }
}

export default Purecomponent
