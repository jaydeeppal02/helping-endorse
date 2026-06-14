
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createHashRouter } from 'react-router-dom' 
import { RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Appp from './New.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Get_started from './components/Get_started.jsx'

// createHashRouter use karein
const router = createHashRouter([ 
  {
    path: '/',
    element: <Root/>,
    children: [
      { path: '/', element: <Appp/> },
      { path: "/login", element: <Login/> },
      { path: '/signup', element: <Signup/> },
      { path: '/get_started', element: <Get_started/> }
    ]
  }  
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)