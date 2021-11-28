import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Card = ({ title, area, category, img, id, onClick, className, setClassName }) => {

    const [heartColor, setHeartColor] = useState('grey')

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

    const getMealFromLS = () => {
        let meals;
        if (localStorage.getItem('meals') === null) {
            meals = [];
        } else {
            meals = JSON.parse(localStorage.getItem('meals'));
        }
        return meals;
    }

    const addMealToLS = (id) => {
        const meals = getMealFromLS();
        //check if id is already in LS
        if (meals.includes(id)) {
            return
        } else {
            meals.push(id);
            localStorage.setItem('meals', JSON.stringify(meals));
        }
    }

    const removeMealFromLS = (id) => {
        const meals = getMealFromLS();
        meals.forEach((meal, index) => {
            if (meal === id) {
                meals.splice(index, 1);
            }
        });
        localStorage.setItem('meals', JSON.stringify(meals));
    }



    const handleHeartClick = () => {
        if (heartColor === 'grey') {
            setHeartColor('pink')
            addMealToLS(id)
        } else {
            setHeartColor('grey')
            removeMealFromLS(id)



        }

    }


    return (

        <div className="card-container" id={id} onClick={onClick}>
            <div className="card-image">
                <img src={img} alt="" />
            </div>
            <div className="card-info" id={id}>
                <div className="card-title"><h3>{title}</h3></div>
                <div className="card-category"><p><FontAwesomeIcon icon={faCubes} className='icon' style={{ color: '#f54e59' }} />{category}</p></div>
                <div className="card-area"><p><FontAwesomeIcon icon={faGlobeEurope} className='icon' style={{ color: '#f54e59' }} />{area}</p></div>
                <div className="heart-btn"></div>
                <FontAwesomeIcon className={`heart ${ heartColor } ${ className }`} icon={faHeart} size="lg" onClick={(e) => handleHeartClick(e)} />

            </div>
        </div>


    );

}
export default Card;