import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";
import {formatCurrency} from "../utils/formatter.js";

export default function MealItem({id, title, description, image, price}) {

    const {meals, addMeal} = useContext(CartContext)

    function handleAddMeal(){
        addMeal({
            id: id,
            title: title,
            description: description,
            image: image,
            price: price
        });
    }

    return (
       <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt="Meal image"/>
                <div>
                    <h3>{title}</h3>
                    <p className="meal-item-price">{formatCurrency(price)}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-actions">
                    <button
                        className="button"
                        onClick={handleAddMeal}
                    >
                        Add to Cart
                    </button>
                </p>
            </article>

       </div>
   )
}