import '../styles/Favourite.css';
import HamburgerMenu from '../components/HamburgerMenu';

const Favourite = ({ isHamburgerClicked, setIsHamburgerClicked }) => {



    return (

        <div>
            {isHamburgerClicked && <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />}
        </div>
    );
}

export default Favourite;