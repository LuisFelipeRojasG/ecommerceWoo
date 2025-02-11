
import useAvionContext from '../context/UseContext'
import { IoMdClose } from "react-icons/io";

function ProductDetail() {
    
  const { setIsProductDetailOpen, productDetail } = useAvionContext()

    return (
        <div className='absolute inset-0 flex flex-row items-center justify-around  w-50vw h-50vh m-[260px] px-10 bg-White bg-opacity-90'>
            <figure>
                <img className='w-[600px] h-[600px]' src={productDetail.images[0]} alt={productDetail.title} />
            </figure>
            <div className='grid grid-rows-7 auto-rows-auto w-[620px] h-auto gap-4 p-4'>
                <button 
                    onClick={() => setIsProductDetailOpen(false)} 
                    className='flex justify-end h-10'
                    >
                        <IoMdClose size={40}/>
                </button>
                <h2 className='h-auto text-Headline_one font-Roboto text-Dark'>{productDetail.title}</h2>
                <p className='text-Headline_three font-Roboto'>$ {productDetail.price}</p>
                <div className='row-start-4 row-end-6'>
                    <h3 className='pb-8 text-Body_medium font-Roboto'>Product Description</h3>
                    <span className='text-Body_small font-Roboto'>
                        {productDetail.description}
                    </span>
                </div>
                <div>
                    <h3 className='row-start-6 text-Body_small font-Roboto'>Quantity</h3>
                    <input type='number' value={1} className='row-start-7 w-1/4 border-8 pl-4' />
                </div>
                <button className='row-start-7 w-36 h-16 bg-Primary text-Light font-Roboto text-Headline_five'> 
                    Add to cart
                </button>
                
            </div>
        </div>
    )
    
}

export default ProductDetail;