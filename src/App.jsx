import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import NavBar from './components/NavBar.jsx'
import Layout from './components/Layout.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
