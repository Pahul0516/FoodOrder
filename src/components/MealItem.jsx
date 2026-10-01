import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";

export default function MealItem({title, description, image, price}) {

    const {setCountMeals} = useContext(CartContext)

    return (
       <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt="Meal image"/>
                <div>
                    <h3>{title}</h3>
                    <p className="meal-item-price">${price}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-actions">
                    <button
                        className="button"
                        onClick={() => { setCountMeals((prevMealCount) => (prevMealCount + 1))}}
                    >
                        Add to Cart
                    </button>
                </p>
            </article>

       </div>
   )
}