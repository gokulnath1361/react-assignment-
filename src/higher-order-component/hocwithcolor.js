import  react, { Component } from 'react';
//function HocWithColor((component,bgcolor)({...props}){
    const HocWithColor=(Component,bgcolor)=>({...props})=>{
    return(
        <>
        <div style={{backgroundColor:bgcolor, padding:40 }}><Component {...props}/></div>     
        </>
    );
}
export default HocWithColor;