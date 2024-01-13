import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './Routes/Admin/Login.jsx'
import Admin from './Routes/Admin/Admin.jsx'
import ErrorLogin from './components/Admin/ErrorLogin.jsx'
// import 


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login/>,
  //   errorElement: <><div><h1>Error Page</h1></div><h3>404 NOT FOUND</h3></>
  // },
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
    // element:<ErrorLogin /> ,
    element:<Admin/>,
    // element: <App />
  },
  // {
  //   path: '/services',
  //   //element: <StudentsList />,
  //   children: [
  //     {
  //       path: 'add',
  //      // element: <AddStudent />
  //     },
  //     {
  //       path: ':id',
  //    //   element: <Student />,
  //       errorElement:<div>no student</div>
  //     }
  //   ]
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
