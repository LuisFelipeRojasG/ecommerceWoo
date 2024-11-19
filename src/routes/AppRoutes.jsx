import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Account from '../pages/Account.jsx'
import Shopping from '../pages/Shopping.jsx'
import Clothing from '../pages/categories/Clothing.jsx'
import House from '../pages/categories/House.jsx'
import Jewelry from '../pages/categories/Jewelry.jsx'

function AppRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/account",
          element: <Account />
        },
        {
          path: "/shopping",
          element: <Shopping />
        },
        {
          path: "/clothing",
          element: <Clothing />
        },
        {
          path: "/house",
          element: <House />
        },
        {
          path: "/jewelry",
          element: <Jewelry />
        }
    ])

  return routes
}

export default AppRoutes