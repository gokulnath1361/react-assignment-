import React from 'react'
import ComponentFour from './ComponentFour'

function ComponentThree(props) {
    // console.log(props.userdetails)
  return (
    <div>
      this is component three
      <ComponentFour ></ComponentFour>
    </div>
  )
}

export default ComponentThree
