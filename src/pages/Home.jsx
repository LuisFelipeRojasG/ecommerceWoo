import React from 'react'
import { FaShoppingBag, FaRecycle } from 'react-icons/fa'
import { GrDeliver } from "react-icons/gr"
import { MdOutlinePayment } from "react-icons/md"
import img19 from '../assets/img19.svg'
import CardImage from '../components/CardImage'
import CardProduct from '../components/CardProduct'

function Home() {
  return (
    <div className='grid grid-cols-4 md:grid-cols-12 px-6 mt-5'>
      {/* Primer Panel */}
      <div className='col-start-1 col-end-5 grid-rows-4 md:col-span-12 md:grid md:grid-cols-12 md:grid-rows-4 pb-4'>
        <div className='md:col-span-6 md:row-span-4 md:col-start-2 grid grid-rows-4'>
          <h1 className='col-span-1 text-body'>Collections</h1>
          <p className='text-paragraph row-span-2'>You can explore and shop many different collections from famous brands</p>
          <button className='row-span-1 w-32 h-10 p-2 flex items-center bg-black text-white'><FaShoppingBag className='mx-2' />
            Shop Now
          </button>
        </div>
        <figure className='hidden md:block md:col-start-9 md:col-span-3 md:row-span-4'>
          <img src={img19} alt="Collections" className=' rounded-tl-[200px] rounded-br-[200px]' />
        </figure>
      </div>
      {/* Segundo Panel */}
      <div className='col-start-1 col-end-5 md:col-end-13 grid grid-cols-4 grid-rows-4 gap-y-9 md:grid-cols-12 md:grid-rows-2 font-Roboto items-center mb-20'>
        <h2 className='row-start-1 text-body2 col-span-4 md:col-span-12 md:col-start-4 md:col-end-10 text-center'>What makes our brand different</h2>
        <div className='row-start-2 col-span-4 px-2 text-botton'>
          <GrDeliver size={30}/>
          <h3 className='my-4 text-botton_large'>Next day as standard</h3>
          <p className='my-4 text-botton_small'>Order before 3pm and get your order
the next day as standard</p>
        </div>
        <div className='row-start-3 col-span-4 px-2 md:row-start-2 text-botton'>
          <MdOutlinePayment size={30} />
          <h3 className='my-4 text-botton_large'>Unbeatable prices</h3>
          <p className='my-4 text-botton_small'>For our materials and quality you won’t find better prices anywhere</p>
        </div>
        <div className='row-start-4 col-span-4 px-2 md:row-start-2 text-botton'>
          <FaRecycle size={30}/>
          <h3 className='my-4 text-botton_large'>Recycled packaging</h3>
          <p className='my-4 text-botton_small'>We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
      </div>
      {/* Tercer Panel */}
      <div className='col-start-1 col-end-5 md:col-end-13 text-center pb-24'>
        <h1 className='mb-14 text-body2'>Explore new and popular styles</h1>
        <CardImage />
      </div>
      {/* Cuarto Panel */}
      <div>
        <CardProduct />
      </div>
      {/* Quinto Panel */}
      <div></div>
    </div>
  )
}

export default Home