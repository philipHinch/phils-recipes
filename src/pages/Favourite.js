import '../styles/Favourite.css';
import HamburgerMenu from '../components/HamburgerMenu';
import { useEffect, useState } from 'react/cjs/react.development';
import Card from '../components/Card';
import MealModal from '../components/MealModal';

const Favourite = ({ isHamburgerClicked, setIsHamburgerClicked }) => {

    const idURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

    const [favMeals, setFavMeals] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [mealInfo, setMealInfo] = useState([])


    const getMealById = (id) => {
        fetch(idURL + id)
            .then(response => response.json())
            .then(data => setFavMeals(prevFavMeals => [...prevFavMeals, data])
            )
    }

    const handleCardClick = (e) => {
        if (e.target.classList.contains('svg-inline--fa') || e.target.parentElement.classList.contains('svg-inline--fa')) {
            console.log('svg clicked, dont open meal');
            return
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
        LSMeals.forEach(meal => getMealById(meal))
    }, [])



    return (

        <div>
            {isHamburgerClicked && <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />}
            {LSMeals.length === 0 && <h2 className="no-meals-alert">No Favourite Meals</h2>}
            <div className="grid favourite-grid">
                {favMeals.map(meal => <Card className={LSMeals.includes(meal.meals[0].idMeal) ? 'pink' : 'grey'} key={meal.meals[0].idMeal} id={meal.meals[0].idMeal} title={meal.meals[0].strMeal} category={meal.meals[0].strCategory} area={meal.meals[0].strArea} img={meal.meals[0].strMealThumb} onClick={(e) => handleCardClick(e)} />)}
                {modalVisible && <MealModal setModalVisible={setModalVisible} mealInfo={mealInfo} />}
            </div>

        </div>
    );
}

export default Favourite;