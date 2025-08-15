import { NavLink } from "react-router"
import useAvionContext from "../context/UseContext";

function MobileMenu() {

    const { setOpenMenu } = useAvionContext();

  return (
    <div onClick={() => {
        setOpenMenu('hidden')
    }
    } className="md:hidden bg-BorderGrey">
        <p className="p-4 font-Open_Sans text-Headline_four">
            <NavLink to='/all'>All</NavLink>
        </p>
        <p className="p-4 font-Open_Sans text-Headline_four">
            <NavLink to='/clothes'>Clothes</NavLink>
        </p>
        <p className="p-4 font-Open_Sans text-Headline_four">
            <NavLink to='/electronics'>Electronics</NavLink>
        </p>
        <p className="p-4 font-Open_Sans text-Headline_four">
            <NavLink to='/forniture'>Forniture</NavLink>
        </p>
        <p className="p-4 font-Open_Sans text-Headline_four">
            <NavLink to='/shoes'>Shoes</NavLink>
        </p>
        <p className="p-4 font-Open_Sans text-Headline_four">
            <NavLink to='/miscellaneous'>Miscellaneous</NavLink>
        </p>
        <p className="p-4 font-Open_Sans text-Headline_four">
            <NavLink to='/shopping'>Cart</NavLink>
        </p>
    </div>
  )
}

export default MobileMenu