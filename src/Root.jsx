import React from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Contact/>
    </>
  )
}

export default Root

