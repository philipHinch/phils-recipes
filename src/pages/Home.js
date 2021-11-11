import '../styles/Home.css';
// import SlidingMenu from '../components/SlidingMenu';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const Home = () => {

    const startingURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b'

    const [inputValue, setInputValue] = useState('')
    const [startingMeals, setStartingMeals] = useState('')

    const { data } = useFetch(inputValue && 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue);



    useEffect(() => {
        fetch(startingURL)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setStartingMeals(data.meals))
    }, [])

    return (

        <main>
            <div className="showcase-container">
                <h2 className="showcase-title">What are you cooking today?</h2>
                <div className="showcase-input-container">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" className="showcase-input" placeholder="Search your meal..." />
                    <button className="showcase-button"><span className="showcase-search-button-text">Search</span></button>
                </div>
            </div>
            {/* <SlidingMenu /> */}
            <div className="grid">
                {startingMeals && !data && startingMeals.map(meal => <Card key={meal.idMeal} title={meal.strMeal} category={meal.strCategory} area={meal.strArea} img={meal.strMealThumb} />)}
                {data && data.meals && data.meals.map(meal => <Card key={meal.idMeal} title={meal.strMeal} category={meal.strCategory} area={meal.strArea} img={meal.strMealThumb} />)}
            </div>
        </main>

    );
}

export default Home;