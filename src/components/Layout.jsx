
import { Outlet } from 'react-router'
import { createPortal } from 'react-dom'
import useAvionContext from '../context/UseContext'
import ProductDetail from './ProductDetail'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout() {

  const { isProductDetailOpen } = useAvionContext()

  return (
    <div className='flex flex-col'>
      <NavBar />
      <div id='layout' className='w-full mt-[66px] md:mt-[132px] pt-8 md:pt-10'>
        <Outlet />
      </div>
      <Footer />
      {isProductDetailOpen && createPortal(
        <ProductDetail />, document.getElementById('layout')
      )}
    </div>
  )
}

export default Layout