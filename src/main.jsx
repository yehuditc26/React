import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Admin from './components/Admin/AdminHome.jsx'
import BusinessDetails from './components/BusinessData/BusinessDetails.jsx'
import ServicesList from './components/Services/ServicesList.jsx'
import MeetingsList from './components/Meetings/MeetingsList.jsx'
import AddServices from './components/Services/AddService.jsx'
import AddMeeting from './components/Meetings/AddMeeting.jsx'



const router = createBrowserRouter([
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>404 העמוד לא קיים:(</div>,
    children: [
      {
        path: '',
        element: <div>empty</div>,
        errorElement: <div>הניתוב לא תקין:(</div>
      },
      {
        path: 'services',
        element: <p>שרותים</p>,
        errorElement: <div>הניתוב לא תקין:(</div>
      },
      {
        path: 'meeting',
        element: <p>פגישות</p>,
        errorElement: <div>הניתוב לא תקין:(</div>
      }
    ]
  },
  {
    path: '/',
    element: <>
      <BusinessDetails />
      <ServicesList />
      {/* <AddServices /> */}
      <AddMeeting />
      <MeetingsList />
    </>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
