import {createContext, useState} from "react";

export const CartContext = createContext({
    countMeals: 0,
    setCountMeals: () => {}
})

export function CartContextProvider({children}){
    const [countMeals, setCountMeals] = useState(0)
    const contextValue = {
        countMeals : countMeals,
        setCountMeals: setCountMeals
    }

    return (<CartContext value = {contextValue}>{children}</CartContext>)
}