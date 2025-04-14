import React from 'react';
import Header from '../Comman/Header'
import { blog } from '../Data/blogs';
import { useLocation } from 'react-router-dom';

export default function BolgsDetails() {
  let location=useLocation();
  let currentId=location.pathname.split('/')[2];
  let currData = blog.filter((v) => v.id == currentId)[0];
  
  console.log(currentId);
  
   
  return (
    <div>
      <Header/>
      <h1>{currData.title}</h1>
     
    </div>
  )
}
