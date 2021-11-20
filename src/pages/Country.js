import { useEffect, useState } from 'react';
import '../styles/Country.css';
import HamburgerMenu from '../components/HamburgerMenu';

const Country = ({ isHamburgerClicked, setIsHamburgerClicked }) => {

    const areaBaseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
    const areasURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const idURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

    const countries = ['American', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Polish', 'Portuguese', 'Russian', 'Spanish', 'Thai', 'Tunisian', 'Turkish', 'Unknown', 'Vietnamese']

    const [areaMeals, setAreaMeals] = useState([])


    useEffect(() => {
        // countries.forEach(country => fetch(areaBaseURL + country)
        //     .then(res => res.json())
        //     .then(data => setAreaMeals(prevAreaMeals => [...prevAreaMeals, { area: country, data: data }]))
        // ) 
        let arr = []
        countries.forEach(country => fetchAPI(country))
        async function fetchAPI(country) {

            let res = await fetch(areaBaseURL + country)
            let data = await res.json()

            arr.push({ country, data })
            setAreaMeals(prevAreaMeals => [...prevAreaMeals, { area: country, data: data }])

        }
    }, [])

    return (

        <div className="country-body">

            {isHamburgerClicked && <HamburgerMenu isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />}

            {areaMeals && areaMeals.map(meal => (
                <div key={meal.area}>
                    <div className={`area `}>
                        <h3>{meal.area}</h3>
                        <div className={`flag-container ${ meal.area }`}>
                        </div>
                    </div>
                    <div className='country-grid grid'>
                        {
                            meal.data.meals.map(m => (
                                <div key={m.strMeal} className="country-meal-card">
                                    <div className="area-meal-img-container">
                                        <img src={m.strMealThumb} alt="meal" />
                                    </div>
                                    <div className="area-meal-info-container">
                                        {m.strMeal}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Country;