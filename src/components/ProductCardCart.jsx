
function ProductCardCart({ data }) {

  return (
    <article className="grid grid-cols-2 gap-4 mb-10 border border-Gray">
      <figure>
          <img className='w-[600px] h-60 object-cover' src={data.images[0]} alt={data.title} />
      </figure>
      <div>
          <h3 className="font-Roboto pb-2 text-Body_medium">{data.title}</h3>
          <h4 className="line-clamp-2 font-Open_Sans text-Body_small">{data.description}</h4>
          <p className="pt-2 font-Open_Sans text-Body_medium">${data.price}</p>
          <p className="pt-6 pl-10 text-Body_medium">{data.quantity}</p>
      </div>
    </article>
  );
}

export default ProductCardCart