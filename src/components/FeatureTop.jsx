import { FaRecycle } from 'react-icons/fa'
import { GrDeliver } from "react-icons/gr"
import { MdOutlinePayment } from "react-icons/md"

function FeatureTop() {
  return (
    <section className='col-start-1 col-end-5 md:col-end-13 grid grid-cols-4 grid-rows-4 gap-y-9 md:grid-cols-12 md:grid-rows-2 font-Roboto items-center mb-20'>
        <h2 className='row-start-1 text-body2 col-span-4 md:col-span-12 md:col-start-4 md:col-end-10 text-center text-Headline_two text-Dark'>What makes our brand different</h2>
        <div className='row-start-2 col-span-4 px-2 text-botton bg-LightGrey'>
          <GrDeliver size={30}/>
          <h3 className='my-4 text-Headline_three text-Primary'>Next day as standard</h3>
          <p className='my-4 text-Headline_four text-Primary'>Order before 3pm and get your order
            the next day as standard</p>
        </div>
        <div className='row-start-3 col-span-4 px-2 md:row-start-2 text-botton bg-LightGrey'>
          <MdOutlinePayment size={30} />
          <h3 className='my-4 text-Headline_three text-Primary'>Unbeatable prices</h3>
          <p className='my-4 text-Headline_four text-Primary'>For our materials and quality you won’t find better prices anywhere</p>
        </div>
        <div className='row-start-4 col-span-4 px-2 md:row-start-2 text-botton bg-LightGrey'>
          <FaRecycle size={30}/>
          <h3 className='my-4 text-Headline_three text-Primary'>Recycled packaging</h3>
          <p className='my-4 text-Headline_four text-Primary'>We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
    </section>
  )
}

export default FeatureTop