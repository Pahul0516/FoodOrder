import logo from './../assets/logo.jpg'
import {useContext, useState} from "react";
import {CartContext} from "./../store/cart-context.jsx";
import Modal from "./Modal.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
import SuccessPanel from "./SuccessPanel.jsx";

export function Header() {


    const {meals} = useContext(CartContext)
    const [openModalCart, setOpenModalCart] = useState(false)
    const [openModalCheckout, setOpenModalCheckout] = useState(false)
    const [openModalSuccess, setOpenModalSuccess] = useState(false)
    const totalCartMeals = meals.reduce( (total, meal) => {
        return total + meal.quantity
    }, 0)


    function onCloseCart(){
        setOpenModalCart(false)
    }

    function onCheckoutCart(){
        setOpenModalCart(false)
        setOpenModalCheckout(true)
    }

    function onCloseCheckout(){
        setOpenModalCheckout(false)
    }

    function onSuccessCart(){
        setOpenModalCheckout(false)
        setOpenModalSuccess(true)
    }

    function onCloseSuccess(){
        setOpenModalSuccess(false)
    }

    return (
        <>
            <Modal open={openModalCart} onClose={onCloseCart}>
                <Cart onClose={onCloseCart} onCheckout={onCheckoutCart}/>
            </Modal>

            <Modal open={openModalCheckout} onClose={onCloseCheckout}>
                <Checkout onClose={onCloseCheckout} onSuccess={onSuccessCart}/>
            </Modal>

            <Modal open={openModalSuccess} onClose={onCloseSuccess}>
                <SuccessPanel onClose={onCloseSuccess}/>
            </Modal>

            <div id='main-header'>
                <div id='title'>
                    <img id="" src={logo} alt="logo" />
                    <h1>ReactFood</h1>
                </div>
                <button
                    className="text-button"
                    onClick={() => {setOpenModalCart(true)}}
                >
                    Cart({totalCartMeals})
                </button>
            </div>
        </>
    )
}