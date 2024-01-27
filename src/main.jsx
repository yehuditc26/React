import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Admin from './components/Admin/AdminHome.jsx'
import BusinessDetails from './components/BusinessData/BusinessDetails.jsx'
import ServicesList from './components/Services/ServicesList.jsx'



const router = createBrowserRouter([
  {
    path: '/admin',
    element:<Admin/>,
    errorElement: <div>404 page not found:(</div>,
    children: [
      {
        path: '',
        element: <div>empty</div>,
         errorElement: <div>error contant not found</div>
      },
      {
        path: 'services',
        element: <div>services</div>,
        errorElement: <div>error contant not found</div>
      },
      {
        path: 'meeting',
        element: <div>meeting</div>,
        errorElement: <div>error contant not found</div>
      }
    ]
  },
  {
    path: '/',
    // element:<Admin/>,
    element:<ServicesList/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
