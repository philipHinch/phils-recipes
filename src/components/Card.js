import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeart2 } from '@fortawesome/free-regular-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Card = ({ title, area, category, img, id, onClick }) => {

    const [heart, setHeart] = useState(faHeart2)

    // const handleMouseEnter = () => {
    //     if (heart === faHeart2) {
    //         setHeart(faHeart)
    //     } else if (heart === faHeart) {
    //         setHeart(faHeart2)
    //     }
    // }
    // const handleMouseLeave = () => {
    //     if (heart === faHeart2) {
    //         setHeart(faHeart)
    //     } else if (heart === faHeart) {
    //         setHeart(faHeart2)
    //     }
    // }
    const handleHeartClick = () => {
        if (heart === faHeart) {
            setHeart(faHeart2)
        } else {
            setHeart(faHeart)
        }
    }

    return (

        <div className="card-container" id={id} onClick={onClick}>
            <div className="card-image">
                <img src={img} alt="" />
            </div>
            <div className="card-info">
                <div className="card-title"><h3>{title}</h3></div>
                <div className="card-category"><p><FontAwesomeIcon icon={faCubes} className='icon' style={{ color: '#f54e59' }} />{category}</p></div>
                <div className="card-area"><p><FontAwesomeIcon icon={faGlobeEurope} className='icon' style={{ color: '#f54e59' }} />{area}</p></div>
                <div className="heart-btn"></div>
                <FontAwesomeIcon icon={heart} size="lg" color="#f54e59" onClick={() => handleHeartClick()} />
            </div>
        </div>


    );
}

export default Card;