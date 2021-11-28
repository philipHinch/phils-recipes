import { useState } from "react/cjs/react.development"

export const useStorage = (id) => {

    const [color, setColor] = useState('grey')

    const getMealFromLS = () => {
        let meals;
        if (localStorage.getItem('meals') === null) {
            meals = [];
        } else {
            meals = JSON.parse(localStorage.getItem('meals'));
        }
        return meals;
    }

    const addMealToLS = (id) => {
        const meals = getMealFromLS();
        //check if id is already in LS
        if (meals.includes(id)) {
            return
        } else {
            meals.push(id);
            localStorage.setItem('meals', JSON.stringify(meals));
        }
    }

    const removeMealFromLS = (id) => {
        const meals = getMealFromLS();
        meals.forEach((meal, index) => {
            if (meal === id) {
                meals.splice(index, 1);
            }
        });
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    if (getMealFromLS(id) === []) {
        console.log('no meals');
    } else {
        console.log('meals in local storage');
    }


    return (
        { color }
    )
}