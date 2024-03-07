import React, { Component } from 'react'

class Binding extends Component {
    constructor(props){
        super(props)
        this.state={
            info:'today is monday'
        };
        // this.updateinfo=this.updateinfo.bind(this);
    }
    updateinfo=()=>{
        this.setState({
            info:'today is tuesday',
        });
    }
  render() {
    return (
      <div>
        <pre>this is binding event handlers
           . they are four types:<br></br>
            1.using bind keyword.<br></br>
            2.using arrow function in render<br></br>
            3.binding event handler in class constructor<br></br>
            4.arrow function as a class property
        </pre>
        <h4>{this.state.info}</h4>
        {/* binding event handler in class constructor */}
        {/* <button onClick={this.updateinfo}>clickhear</button> */}
        {/* usingbinding key word */}
        {/* <button onClick={this.updateinfo.bind(this)}>clickhear</button> */}
        {/* using arrow function */}
        {/* <button onClick={()=>this.updateinfo()}>clickhear</button> */}
        {/* arrow function as a class property */}
        <button onClick={this.updateinfo}>clickhear</button>



      </div>
    )
  }
}

export default Binding;
