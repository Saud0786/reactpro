import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './pages/About';
import Course from './pages/course';
import Blogs from './pages/Blogs';
import BolgsDetails from './pages/BlogsDetails';
import Error404 from './pages/Error404';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes=createBrowserRouter(
   [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about-us',
      element:<About/>
    },
    {
      path:'course',
      element:<Course/>
    },
    {
      path:'blog',
      element:<Blogs/>
    },
    {
      path:'blog/:id',
      element:<BolgsDetails/>
    },{
      path:'*',
      element:<Error404/>
    }
   ]
)
root.render(
  <React.StrictMode>
    {/* Static routing */}
    {/* <RouterProvider router={allRoutes}/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
