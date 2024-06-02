import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Applied from './components/ApplidJobs/Applied.jsx';
import Blog from './components/Blog/Blog.jsx';
import FeatureJob from './components/FeatureJob/FeatureJob.jsx';
import homeLoader from './loaders/jobs.js';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
          path:'/',
          element:<Home></Home>,
          loader: homeLoader,      
     },
     {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
      {
          path:'/applied',
          element:<Applied></Applied>,
          
         
     },
      {
          path:'/blog',
          element:<Blog></Blog>
     },
     {
      path:'/feature',
      element:<FeatureJob></FeatureJob>,
      
     }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
