import {useContext} from "react";
import {CartContext} from "../store/cart-context.jsx";
import {formatCurrency} from "../utils/formatter.js";

export default function Cart({onClose}){

    const {meals, addMeal, removeMeal} = useContext(CartContext);
    const totalCartPrice = meals.reduce((total, meal) => {
        return total + meal.price * meal.quantity
    }, 0)

    function handleAddToCart(meal){
        addMeal(meal);
    }

    function handleRemoveFromCart(meal){
        removeMeal(meal)
    }

    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.id} className='cart-item'>
                        <p>{meal.title + " - " + meal.quantity + " x " + formatCurrency(meal.price)}</p>
                        <p className='cart-item-actions'>
                            <button onClick = {()=> {handleAddToCart(meal)}}> + </button>
                            <span>{meal.quantity}</span>
                            <button onClick = { ()=>{handleRemoveFromCart(meal)}}> - </button>
                        </p>
                    </li>
                ))}
            </ul>
            <p className="cart-total"> {formatCurrency(totalCartPrice)} </p>
            <div className="modal-actions">
                <button
                    className="text-button"
                    onClick = {onClose}
                >
                    Close
                </button>

                <button
                    className="button"
                    onClick = {onClose}
                >
                    Go to Checkout
                </button>
            </div>
        </div>
    )
}