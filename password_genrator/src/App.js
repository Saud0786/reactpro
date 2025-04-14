import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passLength,setPassLength]=useState(10)
  let [finalPassword,setFinalPassword]=useState('')

  let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(uppercase || lowercase || number || symbol){
       if(uppercase) charSet+=UC;
       if(lowercase) charSet+=LC;
       if(number) charSet+=NC;
       if(symbol) charSet+=SC;
       
       for(let i=0;i<passLength;i++){
        finalPass+=charSet.charAt((Math.floor(Math.random()*charSet.length)))
       }
       setFinalPassword(finalPass)
       
      toast.success("PassWord Genrated");
    }else{
      toast.error("Please Select checked box");
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(finalPassword);
    toast.success("Copy successful")
  }

  return (
    <div className='passwordBox'>
      <ToastContainer/>
         <div className='box'>
             <h1>Password Genrator</h1>
            <div className='passwordBoxin'>
            <input type="text" readOnly value={finalPassword}/> <button  onClick={copyPass}>Copy</button>
            </div>

            <div className='passLength'>
              <label >Password length</label>
              <input type="number" min={10} max={30} value={passLength} onChange={(event)=>setPassLength(event.target.value)}/>
            </div>

            <div className='passLength'>
              <label >Include UpperCase letter</label>
              <input type="checkBox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
            </div>

            <div className='passLength'>
              <label >Include LowerCase letter</label>
              <input type="checkBox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
            </div>

            <div className='passLength'>
              <label >Include Number</label>
              <input type="checkBox" checked={number} onChange={()=>setNumber(!number)}/>
            </div>

            <div className='passLength'>
              <label >Include Symbols</label>
              <input type="checkBox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
            </div>

            <button className='gen' onClick={createPassword}>Password Genrate</button>
         </div>
    </div>
  );
}

export default App;
