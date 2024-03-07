import React from 'react'

function MemoComponent(props) {
    console.log('***memocomponent****')
  return (
    <div>
      <h1>this is memo component</h1>
      <h3>React.memo is a function that you can use with functional components to memoize the component, which means it will re-render only when its props have changed. It's similar in functionality to the shouldComponentUpdate lifecycle method in class components.</h3>
      <h3>PureComponent is a class component that you can extend in your class components to achieve the same optimization. It automatically performs a shallow comparison of the component's props and state to determine if a re-render is needed when shouldComponentUpdate is called.</h3>

    </div>
  )
}

export default React.memo(MemoComponent);
