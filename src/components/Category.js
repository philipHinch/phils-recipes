import '../styles/Category.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import MealModal from './MealModal';

const Category = ({ inputValue, category }) => {

    const idURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const categoryBaseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

    const [categoryMeals, setCategoryMeals] = useState([])
    const [mealInfo, setMealInfo] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const getMealById = (id) => {
        setCategoryMeals([])
        fetch(idURL + id)
            .then(response => response.json())
            .then(data => setCategoryMeals(prevCategoryMeals => [...prevCategoryMeals, data])
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

    const handleCardClick = (e) => {
        if (e.target.classList.contains('svg-inline--fa') || e.target.parentElement.classList.contains('svg-inline--fa')) {
            console.log('svg clicked, dont open meal');
        } else if (e.target.parentElement.id) {
            fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + e.target.parentElement.id)
                .then(res => res.json())
                .then(data => setMealInfo(data.meals[0]))
        } else if (e.target.parentElement.parentElement.id) {
            fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + e.target.parentElement.parentElement.id)
                .then(res => res.json())
                .then(data => setMealInfo(data.meals[0]))
        } else if (e.target.parentElement.parentElement.parentElement.id) {
            fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + e.target.parentElement.parentElement.parentElement.id)
                .then(res => res.json())
                .then(data => setMealInfo(data.meals[0]))
        }
        setModalVisible(true)
    }


    return (

        <div className='grid'>

            {categoryMeals && !inputValue && categoryMeals.map(meal => <Card key={meal.meals[0].idMeal} id={meal.meals[0].idMeal} title={meal.meals[0].strMeal} category={meal.meals[0].strCategory} area={meal.meals[0].strArea} img={meal.meals[0].strMealThumb} onClick={(e) => handleCardClick(e)} />)}
            {modalVisible && <MealModal setModalVisible={setModalVisible} mealInfo={mealInfo} />}
        </div>

    );
}

export default Category;