import logo from './../assets/logo.jpg'
import {useContext, useState} from "react";
import {CartContext} from "./../store/cart-context.jsx";
import Modal from "./Modal.jsx";
import Cart from "./Cart.jsx";

export function Header() {


    const {meals} = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const totalCartMeals = meals.reduce( (total, meal) => {
        return total + meal.quantity
    }, 0)


    function onClose(){
        setOpenModal(false)
    }

    return (
        <>
            <Modal open={openModal} onClose={onClose}>
                <Cart onClose={onClose}/>
            </Modal>
            <div id='main-header'>
                <div id='title'>
                    <img id="" src={logo} alt="logo" />
                    <h1>ReactFood</h1>
                </div>
                <button
                    className="text-button"
                    onClick={() => {setOpenModal(true)}}
                >
                    Cart({totalCartMeals})
                </button>
            </div>
        </>
    )
}