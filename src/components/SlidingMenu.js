import { useState } from 'react';
import '../styles/SlidingMenu.css';

const SlidingMenu = ({ setMenuCategory, setInputValue }) => {

    const [categories,] = useState([
        //'Beef',
        'Chicken',
        'Dessert',
        'Lamb',
        'Miscellaneous',
        'Pasta',
        'Pork',
        'Seafood',
        'Side',
        'Starter',
        'Vegan',
        'Vegetarian',
        'Breakfast',
        'Goat']);



    const [selected, setSelected] = useState(null);

    const [beefClass, setBeefClass] = useState('active')

    const onClick = (id) => {

        setInputValue('')
        setSelected(id);
        setMenuCategory(id)



    }

    return (
        <section className="sliding-menu-container">
            <ul className="sliding-menu-ul">

                <li className={beefClass} onClick={() => (setMenuCategory('beef'), !beefClass ? (setSelected(null), setBeefClass('active')) : setBeefClass(''))}>Beef</li>
                {categories.map(category => <li key={category} className={`category ${ category === selected ? 'active' : '' }`} onClick={() => (onClick(category), setBeefClass(''))}>{category} </li>)}
            </ul>
        </section >)

}

export default SlidingMenu;



