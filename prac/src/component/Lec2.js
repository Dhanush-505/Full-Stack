import React,{useState} from 'react';

function Lec2() {
    const [plan,setPlan]=useState("");
    const [status,setStatus]=useState("");
    const [price,setPrice]=useState();
  return (
    <div style={{
        padding:"20px",
        minHeight:"100vh"
     }}>
        <h1>Subscription Plan</h1>
        <p>Plan:{plan}</p>
        <p>Status:{plan==""?"":"Active"}</p>
        <p>price:${price}/month</p>
        {
            status==="Active"?
            <h3>Enjoy the Show....</h3>
            :
            <h3>Subscribtion Paused</h3>
        }
        {
            plan==="Premium" &&
            <h2>Ultra HD Enabled</h2>
        }
        <hr/>
        {/* <button onClick={()=>plan==="Basic"?(setPlan("Standard"),setPrice(299)):(setPlan("Premium"),setPrice(499))}>Upgrade Plan</button> */}
        <button onClick={()=>{
            if(plan===""){
                setPlan("Basic");
                setPrice(199);
            }else if(plan==="Basic"){
                setPlan("Standard");
                setPrice(299);
            }else{
                setPlan("Premium");
                setPrice(499);
            }
        }}>Upgrade Plan</button>
        <br/>
        <button onClick={()=>setStatus("Paused")}>Pause Subscription</button>
        <br/>
        <button onClick={()=>setStatus("Active")}>Resume Subscription</button>
     </div>

  )
}

export default Lec2