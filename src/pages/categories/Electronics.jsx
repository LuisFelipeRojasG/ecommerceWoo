
import { useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import useAvionContext from '../../context/UseContext'
import { allElectronics } from '../../api/indexApi'

function Electronics() {

  const { getProductsCategory, dataProductsCategory } = useAvionContext();

  useEffect(() => {
    getProductsCategory(allElectronics)
  }, [])

  return (
    <div className='flex flex-row flex-wrap justify-between px-6 ' > 
      {
        dataProductsCategory?.map((product) => (
          
          <ProductCard 
            key={product.id} 
            image={product.images[0]}
            title={product.title}
            price={product.price} />
        ))
      }
    </div>
  )
}

export default Electronics