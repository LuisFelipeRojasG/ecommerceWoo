import { createContext, useState } from 'react'

const AvionContext = createContext()

const AvionProvider = ({ children }) => {
  //Para guardar los productos de la categoria seleccionada
  const [dataProductsCategory, setDataProductsCategory] = useState([])

  //Para abrir y cerrar el modal de detalle de producto
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => { setIsProductDetailOpen(true) }
  const closeProductDetail = () => { setIsProductDetailOpen(false) }

  const [productDetail, setProductDetail] = useState([])

    const getProductsCategory = async (url) => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        return setDataProductsCategory(data)
        
      } catch (error) {
        console.log(error)
      }
    }


  
  return (
    <AvionContext.Provider 
    value={{
        getProductsCategory,
        dataProductsCategory,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        setIsProductDetailOpen,
        productDetail,
        setProductDetail
    }}
    >
        {children}
    </AvionContext.Provider>
  );
}

export { AvionContext, AvionProvider }
