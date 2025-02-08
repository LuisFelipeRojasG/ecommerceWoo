
import useAvionContext from '../context/UseContext'

function ProductoDetail() {
    
  const { isProductDetailOpen, setIsProductDetailOpen, productDetail } = useAvionContext()
  console.log(productDetail)

    return (
        <div className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col gap-4 p-4 border border-Gray rounded-lg`}>
            <figure>
                <img src={productDetail.category.image} alt={productDetail.title} />
            </figure>
            <div className=''>
                <h2 className='text-Headline_three font-Roboto text-Dark mb-4'>Detalle del Producto</h2>
                <button onClick={() => setIsProductDetailOpen(false)} className='bg-Primary text-White text-Body_large font-Roboto px-4 py-2 rounded-lg' >Cerrar</button>
            </div>
        </div>
    )
    
}

export default ProductoDetail;