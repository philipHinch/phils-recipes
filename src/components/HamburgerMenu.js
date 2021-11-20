import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion'


const HamburgerMenu = ({ setIsHamburgerClicked }) => {
    return (

        <AnimatePresence>
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0' }}
                exit={{ x: '-100%' }}
                className="hamburger-menu" >
                <FontAwesomeIcon
                    icon={faTimes}
                    size="2x"
                    className="flex-end pointer"
                    onClick={() => setIsHamburgerClicked(false)} />
                <ul className="hamburger-ul">
                    <li><Link to='/' onClick={() => setIsHamburgerClicked(false)}>Home</Link></li>
                    <li><Link to='/country' onClick={() => setIsHamburgerClicked(false)}>Country</Link></li>
                    <li><Link to='/create' onClick={() => setIsHamburgerClicked(false)}>Create</Link></li>
                    <li><Link to='/favourite' onClick={() => setIsHamburgerClicked(false)}>Favourite</Link></li>
                </ul>
            </motion.div >
        </AnimatePresence>

    );
}

export default HamburgerMenu;