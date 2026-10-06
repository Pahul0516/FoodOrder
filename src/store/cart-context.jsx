import {createContext, useState} from "react";

export const CartContext = createContext({
    meals: [],
    addMeal: (meal) => {},
    removeMeal: (meal) => {}
})

export function CartContextProvider({children}){
    const [meals, setMeals] = useState([])

    function addMeal(meal){
        setMeals((prevMeals) =>{

            const index = prevMeals.findIndex(m=> m.id === meal.id)
            const updatedMeals = [...prevMeals]
            if (index > -1) {
                    const existingMeal = prevMeals[index]
                    updatedMeals[index] = {
                        ...existingMeal,
                        quantity: existingMeal.quantity + 1,
                    }
            }
            else{
                updatedMeals.push({
                    ...meal,
                    quantity: 1
                })
            }

            return updatedMeals
        })
    }

    function removeMeal(meal){

        setMeals((prevMeals) =>{
            const index = prevMeals.findIndex(m=> m.id === meal.id)
            const updatedMeals = [...prevMeals]

            const existingMeal = prevMeals[index]

            if (existingMeal.quantity === 1){
                return prevMeals.filter(m => m.id !== meal.id)
            }
            else {
                updatedMeals[index] = {
                    ...existingMeal,
                    quantity: existingMeal.quantity - 1,
                }
                return updatedMeals
            }

        })
    }

    const contextValue = {
        meals : meals,
        addMeal: addMeal,
        removeMeal: removeMeal,

    }

    return (<CartContext value = {contextValue}>{children}</CartContext>)
}