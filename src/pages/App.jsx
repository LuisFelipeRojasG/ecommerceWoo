import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
