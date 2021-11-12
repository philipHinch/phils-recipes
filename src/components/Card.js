import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeart2 } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';


const Card = ({ title, area, category, img }) => {

    const [heart, setHeart] = useState(faHeart2)

    const handleMouseEnter = () => {
        if (heart === faHeart2) {
            setHeart(faHeart)
        } else if (heart === faHeart) {
            setHeart(faHeart2)
        }
    }
    const handleMouseLeave = () => {
        if (heart === faHeart2) {
            setHeart(faHeart)
        } else if (heart === faHeart) {
            setHeart(faHeart2)
        }
    }
    const handleClick = () => {
        if (heart === faHeart) {
            setHeart(faHeart2)
        } else {
            setHeart(faHeart)
        }
    }

    return (

        <div className="card-container" >
            <div className="card-image">
                <img src={img} alt="" />
            </div>
            <div className="card-info">
                <div className="card-title"><h3>{title}</h3></div>
                <div className="card-category"><p>{category}</p></div>
                <div className="card-area"><p>{area}</p></div>
                <div className="heart-btn"></div>
                <FontAwesomeIcon icon={heart} size="lg" color="#f54e59" onClick={() => handleClick()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
        </div>


    );
}

export default Card;