import { createContext, useState } from 'react'

const AvionContext = createContext()

const AvionProvider = ({ children }) => {
  //Para guardar los productos de la categoria seleccionada
  const [dataProductsCategory, setDataProductsCategory] = useState([])


  const [productDetail, setProductDetail] = useState([])

  const [cartProducts, setCartProducts] = useState([])


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
          productDetail,
          setProductDetail,
          cartProducts,
          setCartProducts
      }}
    >
        {children}
    </AvionContext.Provider>
  );
}

export { AvionContext, AvionProvider }
