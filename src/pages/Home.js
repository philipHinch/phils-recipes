import '../styles/Home.css';
import SlidingMenu from '../components/SlidingMenu';
import Card from '../components/Card';
import Category from './Category';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const Home = () => {

    //////////       INSERT SLIDING MENU COMPONENT INSIDE CATEGORY COMPONENT!!!!!     //////////

    const [inputValue, setInputValue] = useState(null)
    const [menuCategory, setMenuCategory] = useState('')

    const { data } = useFetch(inputValue && 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue);

    return (

        <main>
            <div className="showcase-container">
                <h2 className="showcase-title">What are you cooking today?</h2>
                <div className="showcase-input-container">
                    <input onChange={(e) => setInputValue(e.target.value) && inputValue === ''} type="text" className="showcase-input" placeholder="Search your meal..." />
                    <button className="showcase-button"><span className="showcase-search-button-text">Search</span></button>
                </div>
            </div>
            <SlidingMenu setMenuCategory={setMenuCategory} />
            <Category data={data} category={menuCategory} />
            <div className="grid">
                {data && data.meals && data.meals.map(meal => <Card key={meal.idMeal} title={meal.strMeal} category={meal.strCategory} area={meal.strArea} img={meal.strMealThumb} />)}
            </div>
        </main>

    );
}

export default Home;