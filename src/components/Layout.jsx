//import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='pt-24 md:pt-36'>
      <Outlet />
    </div>
  )
}

export default Layout