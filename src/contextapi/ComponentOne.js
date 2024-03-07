import React from 'react'
import ComponentTwo from './ComponentTwo';
import AppContext from './appcontext';

function ComponentOne() {
    const userdetails={
        name:'gokul',
        age:21,
        company:'hcl'
    }
  return (
    <div>
      this is component one
      {/* <ComponentTwo userdetails={userdetails}></ComponentTwo> */}
      <AppContext.Provider value={{userdetails:userdetails}}>
        <ComponentTwo/>
      </AppContext.Provider>
    </div>
  )
}

export default ComponentOne;
