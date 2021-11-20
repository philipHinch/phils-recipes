import '../styles/Create.css';
import HamburgerMenu from '../components/HamburgerMenu';

const Create = ({ isHamburgerClicked, setIsHamburgerClicked }) => {
    return (

        <div>
            {isHamburgerClicked && <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />}
        </div>
    );
}

export default Create;