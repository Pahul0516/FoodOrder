import {Component} from "react";

export default function MealItem({title, description, image, price}) {
   return (
       <div className="meal-item">
            <article>
                <img src={image} alt="Meal image"/>
                <h3>{title}</h3>
                <div className="meal-item-price">${price}</div>
                <div className="meal-item-description">{description}</div>
                <button className="button">Add to Cart</button>
            </article>

       </div>
   )
}