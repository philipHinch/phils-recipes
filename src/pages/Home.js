import '../styles/Home.css';
import SlidingMenu from '../components/SlidingMenu';
import Card from '../components/Card';
import Category from '../components/Category';
import { useEffect, useState } from 'react';
import Showcase from '../components/Showcase';
import HamburgerMenu from '../components/HamburgerMenu';
import MealModal from '../components/MealModal'

const categories = [
    // 'Beef',
    'Chicken',
    'Dessert',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
    'Breakfast',
    'Goat'];

const firstCategory = 'beef'

const Home = ({ isHamburgerClicked, setIsHamburgerClicked }) => {

    const [inputValue, setInputValue] = useState('')
    const [menuCategory, setMenuCategory] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [mealInfo, setMealInfo] = useState([])
    const [searchedMeals, setSearchedMeals] = useState([])
    const [className, setClassName] = useState('grey')


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue)
            .then(res => res.json())
            .then(data => setSearchedMeals(data.meals))
    }, [inputValue])

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


    return (

        <main>
            <svg className="svg-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f54e59" fillOpacity="0.2" d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,224C672,213,768,235,864,245.3C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

            {isHamburgerClicked && <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />}
            <Showcase setInputValue={setInputValue} inputValue={inputValue} />
            <SlidingMenu setMenuCategory={setMenuCategory} setInputValue={setInputValue} categories={categories} firstCategory={firstCategory} />
            <Category category={menuCategory} inputValue={inputValue} handleCardClick={handleCardClick} mealInfo={mealInfo} setModalVisible={setModalVisible} modalVisible={modalVisible} />
            <div className="grid">
                {searchedMeals && inputValue && searchedMeals.map(meal => (
                    <Card checkClassName={!LSMeals && LSMeals.includes(meal.meals[0].idMeal) ? setClassName('pink') : setClassName('grey')} className={className} key={meal.idMeal} id={meal.idMeal} title={meal.strMeal} category={meal.strCategory} area={meal.strArea} img={meal.strMealThumb} onClick={(e) => handleCardClick(e)} />)
                )}
            </div>
            {modalVisible && <MealModal setModalVisible={setModalVisible} mealInfo={mealInfo} />}
        </main>

    );
}

export default Home;