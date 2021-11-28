import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/main-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'


const Navbar = ({ setIsHamburgerClicked }) => {

    return (

        <header>
            <div className="inner-header">
                <FontAwesomeIcon
                    icon={faBars}
                    size="2x"
                    className="hamburger hidden"
                    onClick={() => setIsHamburgerClicked(true)} />
                <ul className="navbar-list">
                    <Link to="/"> <li>Home</li> </Link>
                    {/* <Link to="/category"> <li>Categories</li> </Link> */}
                    <Link to="/country"> <li>Country</li> </Link>
                </ul>
                <Link to='/' className="main-title">
                    <h1>Phil's
                        <span className="main-logo">
                            <motion.img src={Logo} alt="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} onClick={() => setIsHamburgerClicked(false)} />
                        </span> Recipes
                    </h1>
                </Link>
                <ul>
                    <Link to="/create"> <li>Create</li> </Link>
                    <Link to="/favourite"> <li>Favourites</li> </Link>
                </ul>
            </div>
        </header>

    );
}

export default Navbar;