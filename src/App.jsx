import { BrowserRouter, Routes, Route } from 'react-router'
import { AvionProvider } from './context/AvionContext.jsx'
import NavBar from './components/NavBar.jsx'
import Layout from './components/Layout.jsx'

import Home from './pages/Home.jsx'
import Shopping from './pages/Shopping.jsx'
import Clothes from './pages/categories/Clothes.jsx'
import All from './pages/categories/All.jsx'
import Electronics from './pages/categories/Electronics.jsx'
import Forniture from './pages/categories/Forniture.jsx'
import Miscellaneous from './pages/categories/Miscellaneous.jsx'
import Shoes from './pages/categories/Shoes.jsx'


function App() {

  return (
    <AvionProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/all" element={<All />} />          
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/forniture" element={<Forniture />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
            <Route path="/shoes" element={<Shoes />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AvionProvider>
  )
}

export default App
