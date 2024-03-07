import React from 'react';
import { useContext } from 'react';
import AppContext from './appcontext';

function ComponentFour(props) {
    const context=useContext(AppContext)
  return (
    <div>
      this is component four
      {/* <h3>name:{props.userdetails.name}</h3>
      <h3>age:{props.userdetails.age}</h3>
      <h3>company:{props.userdetails.company}</h3> */}
      {/* <AppContext.Consumer>
          {
            context=>{
                return(<>
                <h3>name:{context.userdetails.name}</h3>
                <h3>age:{context.userdetails.age}</h3>
                <h3>company:{context.userdetails.company}</h3>
                </>
                )
            }
          }
      </AppContext.Consumer> */}
                <h3>name:{context.userdetails.name}</h3>
                <h3>age:{context.userdetails.age}</h3>
                <h3>company:{context.userdetails.company}</h3>
    </div>
  )
}
export default ComponentFour;
