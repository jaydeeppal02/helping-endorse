import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createBrowserRouter  } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Appp from './New.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Get_started from './components/Get_started.jsx'

const router = createBrowserRouter([ 
  {
    path:'/',
    element:<Root/>,
    children:[
      {path:'/', element:<Appp/>},
      {path:"/login",element:<Login/>},
      {path:'/signup', element:<Signup/>},
      {path:'/get_started', element:<Get_started/>}
      
      
    ]
    
  }  
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
