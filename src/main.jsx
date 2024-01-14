import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App.jsx'
import Account from './pages/Account.jsx'
import Shopping from './pages/Shopping.jsx'
import Clothing from './pages/categories/Clothing.jsx'
import House from './pages/categories/House.jsx'
import Jewelry from './pages/categories/Jewelry.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
