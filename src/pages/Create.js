import '../styles/Create.css';
import HamburgerMenu from '../components/HamburgerMenu';
import { useEffect, useState } from 'react/cjs/react.development';

const Create = ({ isHamburgerClicked, setIsHamburgerClicked }) => {

    // const categoriesURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     fetch(categoriesURL)
    //         .then(response => response.json())
    //         .then(data => setCategories(prevCategories => [...prevCategories, data.categories]))
    // }, [])

    return (

        <div>
            {isHamburgerClicked && <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />}

            {/* <div className="create-container">
                <h1 className="create-title">Create a Recipe</h1>
                <form className="create-form">
                    <div className="ingredient-img-container">
                    </div>
                    <input type="file" id="upload-img" />
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" />
                    <label htmlFor="area">Area:</label>
                    <input type="text" id="area" />
                    <label htmlFor="category">Category:</label>
                    <select id="category custom-select">
                        {categories[0] && categories[0].map(category => (
                            <option className='category-option' key={category.idCategory} value={category.strCategory} >{category.strCategory}</option>
                        ))}
                    </select>
                    <p className="ingredients-title">Ingredients:</p>
                    <div className="ingredients-container">
                        <div className="ingredient-inputs">

                            <input type="text" id="ingredient-text-input" placeholder="Ingredient" />
                            <input type="number" id="ingredient-number-input" placeholder="Quantity" />
                            <select id="ingredient-measure">
                                <option value="gr">gr</option>
                                <option value="kg">kg</option>
                                <option value="oz">oz</option>
                                <option value="lb">lb</option>
                                <option value=""></option>
                            </select>
                        </div>
                        <button className="btn add-ingredient">Add</button>
                        <ul className="ingredients-list">
                            <li className="ingredient">ingredient 1 50gr</li>
                            <li className="ingredient">ingredient 2 20gr</li>
                        </ul>
                    </div>

                    <button type="submit">Create</button>
                </form>
            </div>
            <div className="my-meals-container">
                <h1 className="my-meals-title">My Meals</h1>
            </div> */}
        </div>
    );
}

export default Create;