
import HeroBlock from '../components/HeroBlock'
import FeatureTop from '../components/FeatureTop'
import Listings from '../components/Listings'

function Home() {

  return (
    <div className='grid grid-cols-4 md:grid-cols-12 px-6 mt-5'>
      <HeroBlock />
      <FeatureTop />
      <Listings />
      {/* Cuarto Panel */}
      <div>
        
      </div>
      {/* Quinto Panel */}
      <div></div>
    </div>
  )
}

export default Home