
function ProductCard() {
  return (
    <article className='cursor-pointer w-40 h-auto'>
        <figure className='relative mb-4'>
            <img className='w-40 h-[200px] object-cover' src="https://images.pexels.com/photos/14594084/pexels-photo-14594084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/" alt="" />
        </figure>
        <p className='flex flex-col'>
          <span className='text-Body_large font-Roboto text-Dark mb-2'>Lampara</span>
          <span className='text-Headline_four font-Roboto'>$300</span>
        </p>
    </article>
  )
}

export default ProductCard