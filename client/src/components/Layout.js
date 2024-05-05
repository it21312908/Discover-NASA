import React from 'react'
import Navbar from './Navbar'

export default function Layout({navbar = true, children, apod,rover}) {
  return (
    <>
    {navbar && <Navbar apod={apod} rover={rover}></Navbar>}
    <div className="container mt-3">
      {children}
    </div>
    </>
  )
}
