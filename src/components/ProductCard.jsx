import useAvionContext from '../context/UseContext'

function ProductCard( {data} ) {

  const { setIsProductDetailOpen, setProductDetail } = useAvionContext()

  const exportProductDetail = (productData) => {

    setProductDetail(productData)
    setIsProductDetailOpen(true)
  }

  return (
    <>
      <article onClick={() => exportProductDetail(data)} className='flex flex-col gap-4 w-60 p-4 border border-Gray'>
        <figure className='relative mb-4'>
            <img className='w-60 h-[200px] object-cover' src={data.images[0]} alt={data.title} />
        </figure>
        <p className='flex flex-col justify-between h-full gap-4'>
          <span className='text-Body_large font-Roboto text-Dark mb-2'>{data.title}</span>
          <span className='text-Headline_four font-Roboto'>$ {data.price}</span>
        </p>
      </article>
    </>
    
  )
}

export default ProductCard