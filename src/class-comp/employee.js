import react from "react";
class Employee extends react.Component{
   constructor(props){
    super(props)
    this.state={
        firstname:"gokul",
        lastname:"k",
        age:"23",
        mail:"gokul@gmail.com",
        employeecount:0
    }
   }
   employeecount=()=>{
    // alert();
    this.setState({
        employeecount:this.state.employeecount+1
    })

   }
   render(){
    return(
        <>
        <h3>
In React, class components were the primary way of creating components before the introduction of functional components and hooks. Class components are JavaScript classes that extend the React.Component class provided by the React library. They have a render method that returns the component's UI, and they can manage component state and lifecycle events.</h3>
       <h1> employee count:{this.state.employeecount}</h1>
       <p>firstname:{this.state.firstname} {this.state.lastname}</p>
       <p>age is:{this.state.age}</p>
       <button onClick={this.employeecount}>click hear</button>

        </>
    )
   }
}
export default Employee