import React, { useState } from 'react'
import logo from './Images/saud.jpg';
import logo2 from './Images/nq.jpeg';
import btnModule from './Button.module.css'
import './LL.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Header({headerInfo,children}) {
  // destructure
  // let {headerInfo}=props;
  // console.log(headerInfo.email);
  // console.log(headerInfo.mobile);
  let[menuStatus,SetmenuStatus]=useState(false);
  let[modelStatus,SetmodelStatus]=useState(false);
  const notify = () =>  {
    NotificationManager.info("Success message", "Notification", 3000);
  }

  return (
    <div>
        <div>
        <button onClick={notify}>Notify!</button>
        <NotificationContainer />
      </div>
      <button className='en' onClick={()=>SetmodelStatus(true)}>Enquire now</button>
      <div onClick={()=>SetmodelStatus(false)}  className={`modelOverLay ${modelStatus?'modelshow':''}`}></div>
      <div className={`ModelDiv ${modelStatus?'modeldivShow':''}`}>
        <h3>Enquire Now <span onClick={()=>SetmodelStatus(false)} className='ms-3'>&times;</span> </h3>
      </div>

        {/* menu example */}
      <button className='mIcon' onClick={()=>SetmenuStatus(!menuStatus)}> {menuStatus?<span> &times; </span>:<span> &#9776; </span> }</button>
      <div className={`menu ${menuStatus?'activeMenu':'menu'}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <button className={btnModule.warning}>Warning</button>
      <button className={btnModule.error}>Error</button>
        <div>
          {children}
          {/* add img in the React */}
          <img width={50}  src={logo} alt=""/>
          <img width={50} src={logo2} alt=""/>
          {/* <img src={lg}  alt=''/> */}
          <h1 className='hero'>Welcome in my App {headerInfo.email} | {headerInfo.mobile}</h1>
          <div>Thanks to login</div>
          <div>This web is made by react</div>
        </div>
    </div>
  )
}


