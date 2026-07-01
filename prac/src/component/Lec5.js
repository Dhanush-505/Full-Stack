import React ,{ useState , useEffect }from 'react';

function Lec5() {
    // const [name,setName]=useState("");
    const [id,setId]=useState("");
    const [info,setInfo]=useState([]);
    const[darkMode,setDarkMode]=useState(false);
    const employee = info.find((emp) => emp.id === Number(id));
     useEffect(()=>{
        fetch("/Employ.json")
        .then((res)=>{
            console.log(res);
            return res.json();
        })
        .then((data)=>{
          setInfo(data);
          console.log(data);
        })
        .catch((error)=>{
          console.log(error);
        })
       },[]);
  return (
    <div
     style={{
        padding:"20px",
        minHeight:"100vh",
        backgroundColor:darkMode?"#222":"#fff",
        color:darkMode?"#fff":"#000"
     }}>
        <h1>Student Profile</h1>
        {/* <div>
            <label>Name:</label>
            <br/>
            <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <br/> */}
        <div>
            <label>ID:</label>
            <br/>
            <input type="number" value={id} placeholder="enter ID" onChange={(e)=>setId(e.target.value)}/>
        </div>
        <br/>
        <button onClick={()=>setDarkMode(!darkMode)}>Switch to {darkMode ?"Light":"Dark"}Mode</button>
        <hr/>
        <h2>Profile Information</h2>
        {
            employee ? (
        <>
        <p><strong>ID: </strong>{employee?.id}</p>
        <p><strong>Name: </strong>{employee?.name}</p>
        <p><strong>Age: </strong>{employee?.age}</p>
        <p><strong>Designation: </strong>{employee?.designation}</p>
        <p><strong>Salary: </strong>{employee?.salary}</p>
        </> ):(
            <p>Employee not found</p>
        )
        }
     </div>
  )
}

export default Lec5