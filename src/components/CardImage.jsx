
import image01 from '../assets/img1.svg'
import image02 from '../assets/img2.svg'
import image03 from '../assets/img3.svg'
import image04 from '../assets/img4.svg'
import image05 from '../assets/img5.svg'

function CardImage() {
  return (
    <div className='grid grid-cols-4 grid-rows-4 md:grid-cols-12 gap-4'>
        <figure className='col-span-4 md:col-start-1 md:col-end-7 row-span-4'>
            <img src={image01} alt="Styles" />
        </figure>
        <figure className='col-span-4 md:col-start-7 md:col-end-10 row-span-2'>
            <img src={image02} alt="Styles" />
        </figure>
        <figure className='col-span-4 md:col-start-10 md:col-end-13 row-span-2'>
            <img src={image03} alt="Styles" />
        </figure>
        <figure className='col-span-4 md:col-start-7 md:col-end-10 row-span-2'>
            <img src={image04} alt="Styles" />
        </figure>
        <figure className='col-span-4 md:col-start-10 md:col-end-13 row-span-2'>
            <img src={image05} alt="Styles" />
        </figure>
    </div>
  )
}

export default CardImage
