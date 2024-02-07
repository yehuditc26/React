import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import AdminHome from './components/Admin/AdminHome.jsx'
import BusinessDetails from './components/BusinessData/BusinessDetails.jsx'
import ServicesList from './components/Services/ServicesList.jsx'
import MeetingsList from './components/Meetings/MeetingsList.jsx'
import AddServices from './components/Services/AddService.jsx'
import AddMeeting from './components/Meetings/AddMeeting.jsx'



const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminHome />,
    errorElement: <div>404 העמוד לא קיים:(</div>,
    children: [
      {
        path: 'services',
        element: <>
          <ServicesList />
          <AddServices />
          </>,
        errorElement: <div>הניתוב לא תקין:(</div>
      },
      {
        path: 'meeting',
        element: <MeetingsList />,
        errorElement: <div>הניתוב לא תקין:(</div>
      }
    ]
  },
  {
    path: '/',
    element: <>
      <BusinessDetails />
      <ServicesList />
      <AddMeeting />
      </>,
    errorElement: <div>404 העמוד לא קיים:(</div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
