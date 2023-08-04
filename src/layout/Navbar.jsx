import { NavLink} from 'react-router-dom'
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
  return (
    <footer className='navbar'>
        <nav className="navbarNav">
            <ul className="navbarListItems">
              <NavLink to='offers'>
                <li className="navbarListItem">
                    <OfferIcon width='36px' height='36px'/>
                    <p>Offers</p>
                </li>
              </NavLink>
              <NavLink to='/'>
                <li className="navbarListItem">
                  <ExploreIcon width='36px' height='36px'/>
                  <p>Explore</p>
                </li>
              </NavLink>
              <NavLink to='profile'>
                <li className="navbarListItem">
                  <PersonOutlineIcon width='36px' height='36px'/>
                  <p>Profile</p>
                </li>
              </NavLink>
            </ul>
        </nav>
    </footer>
  )
}

export default Navbar
