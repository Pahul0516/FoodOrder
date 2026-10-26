import {formatCurrency} from "../utils/formatter.js";
import {useContext, useActionState} from "react";
import {CartContext} from "../store/cart-context.jsx";
import Submit from "./Submit.jsx";
import {API_URL} from "../config.js";

export default function Checkout ({onClose, onSuccess}) {

    const {meals, clearMeals} = useContext(CartContext);
    const totalAmount = meals.reduce((total, meal) => {
        return total + meal.price * meal.quantity;
    }, 0)

    async function handleSubmitCheckout(previousFormData, formData) {
        const checkout = Object.fromEntries(formData.entries());

        const orderData = {
            order: {
                customer: {
                    ...checkout
                },
                items: meals
            }
        };

        try{
            console.log(orderData);
            const response = await fetch(`${API_URL}/orders`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            })

            const responseData = await response.json();

            if (!response.ok) {
                console.log(responseData);
                return {error: responseData.message || "Failed to submit order!"};
            }

            clearMeals()
            onSuccess();

            return {success: true, message: responseData.message}
        } catch (err) {
            return {error: err.message || "Network error occurred."};
        }
    }


    const [formState, formAction] = useActionState(handleSubmitCheckout, {error: null})

    return (
        <form action={formAction}>
            <h2>Checkout</h2>
            <p>Total Amount {formatCurrency(totalAmount)}</p>

            <div className='control'>
                <label> Full Name</label>
                <input type='text' name='name'/>
            </div>

            <div className='control'>
                <label>E-Mail Address</label>
                <input type='email' name='email'/>
            </div>

            <div className='control'>
                <label>Street</label>
                <input type='text' name='street'/>
            </div>

            <div className="control-row">
                <div className='control'>
                    <label>Postal Code</label>
                    <input type='text' name='postal-code'/>
                </div>
                <div className='control'>
                    <label>City</label>
                    <input type='text' name='city'/>
                </div>
            </div>

            {formState?.error && (<p className='error'>{formState.error}</p>)}

            <div className="modal-actions">
                <button
                    type='button'
                    className="text-button"
                    onClick = { ()=> {
                        formState.error = null;
                        onClose()
                    }}
                >
                    Close
                </button>
                <Submit />
            </div>

        </form>)
}
