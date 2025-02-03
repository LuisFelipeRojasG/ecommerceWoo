import { createContext, useState } from 'react'

const AvionContext = createContext()

const AvionProvider = ({ children }) => {

  const [dataProductsCategory, setDataProductsCategory] = useState([])

    const getProductsCategory = async (url) => {

        const response = await fetch(url)
        const data = await response.json()
        return setDataProductsCategory(data)
    }


  
  return (
    <AvionContext.Provider 
    value={{
        getProductsCategory,
        dataProductsCategory
    }}
    >
        {children}
    </AvionContext.Provider>
  );
}

export { AvionContext, AvionProvider }
