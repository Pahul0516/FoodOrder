import MealItem from "./MealItem.jsx";
import {useEffect, useState} from "react";

export default function Meals() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch("http://localhost:3000/meals");
            const fetchedMeals = await response.json();
            setMeals(fetchedMeals);
        }
        fetchMeals();
    }, [])

    return (
        <div id="meals">
            {meals.map((meal) => (
                <MealItem
                    key={meal.id}
                    title={meal.name}
                    image={meal.image}
                    description={meal.description}
                    price={meal.price}
                />
            ))}
        </div>
    )
}