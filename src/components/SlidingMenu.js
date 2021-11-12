import '../styles/SlidingMenu.css';


const SlidingMenu = ({ getCategory }) => {


    const handleClick = (e) => {
        const categories = document.querySelectorAll('.category')
        categories.forEach(category => {
            if (category.classList.contains('active')) {
                category.classList.remove('active')
            }
        })
        e.target.classList.add('active')
        getCategory(e.target.textContent)
    }



    return (
        <section className="sliding-menu-container">
            {/* <h2 className="sliding-menu-title">Categories</h2> */}
            <ul className="sliding-menu-ul">
                <li className="category active" onClick={(e) => handleClick(e)}>Beef</li>
                <li className="category" onClick={(e) => handleClick(e)}>Chicken</li>
                <li className="category" onClick={(e) => handleClick(e)}>Dessert</li>
                <li className="category" onClick={(e) => handleClick(e)}>Lamb</li>
                <li className="category" onClick={(e) => handleClick(e)}>Miscellaneous</li>
                <li className="category" onClick={(e) => handleClick(e)}>Pasta</li>
                <li className="category" onClick={(e) => handleClick(e)}>Pork</li>
                <li className="category" onClick={(e) => handleClick(e)}>Seafood</li>
                <li className="category" onClick={(e) => handleClick(e)}>Side</li>
                <li className="category" onClick={(e) => handleClick(e)}>Starter</li>
                <li className="category" onClick={(e) => handleClick(e)}>Vegan</li>
                <li className="category" onClick={(e) => handleClick(e)}>Vegetarian</li>
                <li className="category" onClick={(e) => handleClick(e)}>Breakfast</li>
                <li className="category" onClick={(e) => handleClick(e)}>Goat</li>
            </ul>
        </section>
    );
}

export default SlidingMenu;