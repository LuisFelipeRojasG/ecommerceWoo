
import { Outlet } from 'react-router'
import { createPortal } from 'react-dom'
import useAvionContext from '../context/UseContext'
import ProductDetail from './ProductDetail'

function Layout() {

  const { isProductDetailOpen } = useAvionContext()

  return (
    <div id='layout' className='mt-[66px] md:mt-[132px] pt-8 md:pt-10'>
      <Outlet />
      {isProductDetailOpen && createPortal(
        <ProductDetail />, document.getElementById('layout')
      )}
    </div>
  )
}

export default Layout