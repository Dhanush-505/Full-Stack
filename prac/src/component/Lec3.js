import React, {useState} from 'react';
import { useEffect } from "react";

function Lec3() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
      document.title = `Count:${count}`;
    }, [count]);
  return (
    <div>
        <h1>Profile Visited {count} times</h1>
        <button onClick={()=>setCount(count+1)}>Hit</button>
        {
            count>5 && <h3>Popular Profile </h3>
        }
    </div>
  )
}

export default Lec3