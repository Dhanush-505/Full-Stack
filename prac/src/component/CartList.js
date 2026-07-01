import { useEffect } from "react";
import React,{useState} from 'react';


function CartList() {
   const [cart,setCart] = useState([]);
   const [pro,setPro] = useState([]);
   useEffect(()=>{
    fetch("/List.json")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
      setPro(data);
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
   },[]);

   
  return (

    <div>
      <h1>Cart List</h1>
      {pro.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <button onClick={()=>setCart([...cart,item])}>Add to Cart</button>
        </div>
      ))}
      <hr/>
      <h1>Cart</h1>
      {cart.map((item,index)=>(
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <button onClick={()=>setCart(cart.filter((_, i) => i !== index))}>Remove</button>
          {/* <button onClick={()=>setCart(cart.filter((cartItem) => cartItem.id !== item.id))}>Remove</button> */}
        </div>
      ))}
    </div>

  )
}

export default CartList;
  