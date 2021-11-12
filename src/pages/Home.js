import '../styles/Home.css';
import SlidingMenu from '../components/SlidingMenu';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Category from './Category';

const Home = () => {

    const idURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

    const categoryBaseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

    const [inputValue, setInputValue] = useState('')
    const [categoryMeals, setCategoryMeals] = useState([])
    // const [idMeal, setIdMeal] = useState('')
    // const [startingMeals, setStartingMeals] = useState('')






    const { data } = useFetch(inputValue && 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue);



    // useEffect(() => {
    //     fetch(beefURL)
    //         .then(response => response.json())
    //         .then(data => data.meals.forEach(meal => getMealById(meal.idMeal)))
    // }, [])


    const getMealById = (id) => {
        setCategoryMeals([])
        fetch(idURL + id)
            .then(response => response.json())
            .then(data => setCategoryMeals(prevCategoryMeals => [data, ...prevCategoryMeals])
            )
    }

    const getCategory = (category) => {
        fetch(categoryBaseURL + category)
            .then(response => response.json())
            .then(data => data.meals.forEach(meal => getMealById(meal.idMeal)))
    }

    useEffect(() => {
        getCategory('beef')
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
            <SlidingMenu getCategory={getCategory} />
            <div className="grid">
                {categoryMeals && !data && categoryMeals.map(meal => <Card key={meal.meals[0].idMeal} title={meal.meals[0].strMeal} category={meal.meals[0].strCategory} area={meal.meals[0].strArea} img={meal.meals[0].strMealThumb} />)}
                {data && data.meals && data.meals.map(meal => <Card key={meal.idMeal} title={meal.strMeal} category={meal.strCategory} area={meal.strArea} img={meal.strMealThumb} />)}
            </div>
        </main>

    );
}

export default Home;