import { useEffect, useState } from 'react'
import CardProduct from '../components/ProductCard'
import HeroBlock from '../components/HeroBlock'
import FeatureTop from '../components/FeatureTop'
import Listings from '../components/Listings'

function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
      // This code will run once when the component mounts
      fetch('https://api.escuelajs.co/api/v1/categories')
          .then(response => console.log(response.json()))
          .then(data => setData(data))
  }, []); // Empty dependency array means this effect runs once

  return (
    <div className='grid grid-cols-4 md:grid-cols-12 px-6 mt-5'>
      <HeroBlock />
      <FeatureTop />
      <Listings />
      {/* Cuarto Panel */}
      <div>
        <CardProduct />
      </div>
      {/* Quinto Panel */}
      <div></div>
    </div>
  )
}

export default Home