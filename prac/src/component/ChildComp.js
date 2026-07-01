import React from 'react'

function ChildComp(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button>
    </div> */}
    <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComp