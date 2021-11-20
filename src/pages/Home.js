import '../styles/Home.css';
import SlidingMenu from '../components/SlidingMenu';
import Card from '../components/Card';
import Category from '../components/Category';
import { useEffect, useState } from 'react';
import Showcase from '../components/Showcase';
import HamburgerMenu from '../components/HamburgerMenu';

const Home = ({ isHamburgerClicked, setIsHamburgerClicked }) => {



    const [inputValue, setInputValue] = useState('')
    const [menuCategory, setMenuCategory] = useState('')
    const [searchedMeals, setSearchedMeals] = useState([])


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue)
            .then(res => res.json())
            .then(data => setSearchedMeals(data.meals))
    }, [inputValue])

    return (

        <main>
            {isHamburgerClicked && <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />}
            {/* <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} /> */}
            <Showcase setInputValue={setInputValue} inputValue={inputValue} />
            <SlidingMenu setMenuCategory={setMenuCategory} setInputValue={setInputValue} />
            <Category category={menuCategory} inputValue={inputValue} />
            <div className="grid">
                {searchedMeals && inputValue && searchedMeals.map(meal => (
                    <Card key={meal.idMeal} title={meal.strMeal} category={meal.strCategory} area={meal.strArea} img={meal.strMealThumb} />)
                )}
            </div>
        </main>

    );
}

export default Home;