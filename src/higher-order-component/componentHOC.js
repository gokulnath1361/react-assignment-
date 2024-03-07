import react from 'react';
import ComponentA from './componentA';
import ComponentB from './componentB';
import ComponentC from './componentC';
function ComponentHOC(){
    return(
        <>
        <h3>it is a function that takes a component as a argument and return a new component.</h3>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
        </>
    )
}
export default ComponentHOC;