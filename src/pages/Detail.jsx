import FeatureTop from '../components/FeatureTop'
import Listings from '../components/Listings'
import EmailSignUp from '../components/EmailSignUp'
import ProductDetail from '../components/ProductDetail'

function Detail() {

  return (
    <div>
      <div className='grid grid-cols-4 md:grid-cols-12 px-6 mt-5'>
        <ProductDetail />
        <Listings />
        <FeatureTop />
      </div>
      <EmailSignUp />
    </div>
    
  )
}

export default Detail