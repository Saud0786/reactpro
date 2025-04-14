import React, { useState } from 'react'
import { use } from 'react';

export default function Footer() {
  // useState
  let[count,setCount]=useState(1);
  // conditional statement
  let template=''
  let[pshow,setpshow]=useState(false);
  if(pshow){
    template=<>
       <button className='p-4 bg-danger' onClick={()=>setpshow(!pshow)}>Hide</button>
       <p>welcome to web</p>
    </>
  }else{
    template= <button className='p-4 bg-danger' onClick={()=>setpshow(!pshow)}>Show</button>
  }
  // event handling in react without parameter
  let displayData=()=>{
     setCount(count+1)
  }
  // event handling in react with parameter
  let addNum=function(a,b){
    alert(a+b);
  }

   // ternary operator
   let[status,setStatus]=useState(false)
  return (
    
    <div>
       <div className='container-fluid'> 
        <div className='container'>
        {template}
        </div>
       </div>

       <div className='container-fluid'> 
        <div className='container'>
          <button onClick={()=>setStatus(!status)}>
            {(status)?"hide":"Show"}
          </button>
          {
            (status)? <p className='p-3 bg-danger'>Welcome to ws</p>:""
          }
        </div>
       </div>
        <div>
        {count}
        </div>
        <h1>This Footer Part</h1>
        <button className='p-3 bg-danger me-3' onClick={displayData}>Login</button>
        <button className='p-3 bg-danger' onClick={()=>addNum(2,4)}>Register</button>
    </div>
  )
}
