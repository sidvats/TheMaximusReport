import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import StartupHub from './Components/Body/Article/StartupHub';
import AboutUs from "./Components/Body/Article/AboutUs";
import GetFeatured from "./Components/Body/Article/GetFeatured";
import Jobs from "./Components/Body/Article/Jobs";
import TechUpdates from "./Components/Body/Article/TechUpdates";
import LegalReports from "./Components/Body/Article/LegalReports";
import YourStory from "./Components/Body/Article/YourStory";
import StudentsCorner from "./Components/Body/Article/StudentsCorner";
import { Link } from 'react-router-dom';
import TestComponent from "./Components/TestComponent"
const ErrEle=()=>{
  return (
    <div style={{boxShadow:"0px 0px 10px pink",margin:"8rem 20rem 10rem 20rem",padding:"5rem"}}>
      <h1 style={{textAlign:"center",textShadow:"0px 2px 10px pink"}}>Oops <span style={{color:"red",textShadow:"0px 0px 10px grey"}}>!</span> Error 404 Page Not Found </h1>
      <Link to="/">Return To Home</Link>
    </div>
  )
}
const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      children:[
      {
        path:"/",
        element:<StartupHub/>
      },
      {
        path:"/The-Primus-Report",
        element:<StartupHub/>
      },
      {
        path:"/The-Primus-Report/",
        element:<StartupHub/>
      },
      {
        path:"/Legal_Reports",
        element:<LegalReports/>
      },
      {
        path:"/Tech_Updates",
        element:<TechUpdates></TechUpdates>
      },
      {
        path:"/Your_Story",
        element:<YourStory></YourStory>
      },
      {
        path:"/Students_Corner",
        element:<StudentsCorner></StudentsCorner>
      },
      {
        path:"/Jobs",
        element:<Jobs></Jobs>
      },
      {
        path:"/Get_Featured",
        element:<GetFeatured></GetFeatured>
      },
      {
        path:"/About_Us",
        element:<AboutUs></AboutUs>
      }
      ],
      errorElement:<ErrEle/>
  },{
    path:"/test",
    element:<TestComponent/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
