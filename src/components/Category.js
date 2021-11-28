import '../styles/Category.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import MealModal from './MealModal';



const Category = ({ inputValue, category, handleCardClick, mealInfo, setModalVisible, modalVisible }) => {



    const idURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const categoryBaseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';


    const [categoryMeals, setCategoryMeals] = useState([])


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

    const getMealFromLS = () => {
        let meals
        if (localStorage.getItem('meals') === null) {
            meals = [];
        } else {
            meals = JSON.parse(localStorage.getItem('meals'));
        }
        return meals;
    }

    let LSMeals = getMealFromLS()

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

            {categoryMeals && !inputValue && categoryMeals.map(meal => <Card className={LSMeals.includes(meal.meals[0].idMeal) ? 'pink' : 'grey'} key={meal.meals[0].idMeal} id={meal.meals[0].idMeal} title={meal.meals[0].strMeal} category={meal.meals[0].strCategory} area={meal.meals[0].strArea} img={meal.meals[0].strMealThumb} onClick={(e) => handleCardClick(e)} />)}
            {modalVisible && <MealModal setModalVisible={setModalVisible} mealInfo={mealInfo} />}
        </div>

    );
}

export default Category;