import React from 'react'
import ComponentThree from './ComponentThree'

function ComponentTwo(props) {
    // console.log(props.userdetails)
  return (
    <div>
      this is component two
      <ComponentThree ></ComponentThree>
    </div>
  )
}

export default ComponentTwo
