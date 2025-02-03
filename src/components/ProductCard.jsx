
function ProductCard( { image, title, price} ) {
  return (
    <article className='cursor-pointer w-40 h-[350px] flex flex-col mb-10'>
        <figure className='relative mb-4'>
            <img className='w-40 h-[200px] object-cover' src={image} alt={title} />
        </figure>
        <p className='flex flex-col justify-between h-full gap-4'>
          <span className='text-Body_large font-Roboto text-Dark mb-2'>{title}</span>
          <span className='text-Headline_four font-Roboto'>{price}</span>
        </p>
    </article>
  )
}

export default ProductCard