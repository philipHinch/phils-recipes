import '../styles/Category.css';
import Card from '../components/Card';
import SlidingMenu from '../components/SlidingMenu';
import { useState, useEffect } from 'react';

const Category = ({ data, category }) => {

    const idURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const categoryBaseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

    const [categoryMeals, setCategoryMeals] = useState([])

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

    useEffect(() => {
        if (category) {
            getCategory(category)
        }
    }, [category])

    return (

        <div className='grid'>

            {categoryMeals && !data && categoryMeals.map(meal => <Card key={meal.meals[0].idMeal} title={meal.meals[0].strMeal} category={meal.meals[0].strCategory} area={meal.meals[0].strArea} img={meal.meals[0].strMealThumb} />)}

        </div>

    );
}

export default Category;