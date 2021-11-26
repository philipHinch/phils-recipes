import { useState } from 'react';
import '../styles/SlidingMenu.css';

const SlidingMenu = ({ setMenuCategory, setInputValue, categories, firstCategory }) => {

    const [selected, setSelected] = useState(null);
    const [firstLiClass, setFirstLiClass] = useState('active')

    const handleCategoryClick = (id) => {

        setInputValue('')
        setSelected(id);
        setMenuCategory(id)
    }

    return (
        <section className="sliding-menu-container">
            <ul className="sliding-menu-ul">

                <li className={firstLiClass} onClick={() => (setMenuCategory(firstCategory), !firstLiClass ? (setSelected(null), setFirstLiClass('active')) : setFirstLiClass(''))}>{firstCategory}</li>
                {categories.map(category => <li key={category} className={`category ${ category === selected ? 'active' : '' }`} onClick={() => (handleCategoryClick(category), setFirstLiClass(''))}>{category} </li>)}

            </ul>
        </section >)

}

export default SlidingMenu;



