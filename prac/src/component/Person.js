import React from 'react'

function Person({person}) {
  return (
    <div><h1>I am {person.name}, my age is {person.age} and my designation is {person.designation}</h1></div>
  )
}

export default Person