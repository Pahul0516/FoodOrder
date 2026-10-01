import logo from './../assets/logo.jpg'
import {useContext, useState} from "react";
import {CartContext} from "./../store/cart-context.jsx";
import Modal from "./Modal.jsx";

export function Header() {


    const {countMeals} = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)

    function onClose(){
        setOpenModal(false)
    }

    return (
        <>
            <Modal open={openModal} onClose={onClose}>
                <button type='button' onClick={onClose}>
                    Close
                </button>
                <p> aici se afiseaza cart-ul</p>
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
                    Cart({countMeals})
                </button>
            </div>
        </>
    )
}