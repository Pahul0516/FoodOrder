import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import {API_URL} from "../config.js";

const requestConfig = {}

export default function Meals() {

    const {data: meals} = useHttp(`${API_URL}/meals`, requestConfig, [])

    return (
        <div id="meals">
            {meals.map((meal) => (
                <MealItem
                    key={meal.id}
                    id={meal.id}
                    title={meal.name}
                    image={meal.image}
                    description={meal.description}
                    price={meal.price}
                />
            ))}
        </div>
    )
}
