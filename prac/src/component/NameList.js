import React from 'react'
import Person from './Person';

function NameList() {
    const names=['Dhanush','Manikanta','Abhiram']
    const persons = [{
        "id":1,
        "name":"Abhiram",
        "age":21,
        "designation":"Software Engineer",
        "salary":50000
    },
     {
        "id":2,
        "name":"Dhanush",
        "age":20,
        "designation":"Software Developer",
        "salary":40000
    },
    {
        "id":3,
        "name":"Greeshma",
        "age":21,
        "designation":"Software Engineer",
        "salary":60000
    },
     {
        "id":4,
        "name":"Surya",
        "age":22,
        "designation":"Software Developer",
        "salary":40000
    }];
    // const personList = persons.map(person => <Person person={person}/> )
    const nameList = names.map(name =><Person person={person}/>)
  return (
    <div>
        {/* <h2>{Names[0]}</h2>
        <h2>{Names[1]}</h2>
        <h2>{Names[2]}</h2> */}
        {/* {
            Names.map(name =><h1>{name}</h1>)
        } */}
        {personList}
    </div>
  )
}

export default NameList