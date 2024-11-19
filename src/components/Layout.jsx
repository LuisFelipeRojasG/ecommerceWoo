import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div className='pt-24 md:pt-36'>
      {children}
    </div>
  )
}

export default Layout