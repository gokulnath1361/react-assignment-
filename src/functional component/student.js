import React,{useState} from "react";
const Student=(props)=>{
    const [studentcount,setstudentcount]=useState(0);
    // console.log(props.name);
    const updatestudent=()=>{
        setstudentcount(studentcount+1);
    }
    return<>
    <h1>student count:{studentcount}</h1>
    <p>this is :{props.name}</p>
    <p>age:{props.age}</p>
    <button onClick={updatestudent}>increse</button>
    </>
}
export default Student;