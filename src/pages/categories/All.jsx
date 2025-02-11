import { useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import useAvionContext from '../../context/UseContext'
import { allProductos } from '../../api/indexApi'

function All() {

  const { getProductsCategory, dataProductsCategory } = useAvionContext()

  useEffect(() => {
    getProductsCategory(allProductos)
  }, [])

  return (
    <div className='grid grid-cols-4 gap-8 justify-items-center p-20' > 
      {
        dataProductsCategory?.map(product => (
          
          <ProductCard 
            key={product.id} 
            data={product}
          />
          
        ))
      }
    </div>
  )
}

export default All