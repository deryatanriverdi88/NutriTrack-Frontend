import React from 'react'
// import {Link} from 'react-router-dom'

const  FoodItem = (props) => {
const {name, calorie, carb, sugar, fat, serving_size, protein} = props.food
    console.log(props)
  return(
    <div className="food-item"> 
       
        <ul>
          
            <li> <span>Name :</span> { name } </li>
            <li> <span>Calories :</span>{ calorie } </li>
            <li> <span>Carbs :</span> { carb } </li>
            <li> <span>Sugar :</span>{ sugar } </li>
            <li> <span>Fat :</span> { fat } </li>
            <li> <span>Protein :</span> { protein } </li>
            <li> <span>Serving Size :</span>{ serving_size } gr </li>
            <button  className="x"onClick={props.handleClick}> <span> ❌ </span></button>
        </ul>
    </div>
   )

 }

export default FoodItem