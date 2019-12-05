import React from 'react'
// import {Link} from 'react-router-dom'

const  FoodItem = (props) => {
const {name, calorie, carb, sugar, fat, serving_size, protein} = props.food
    console.log(props)
  return(
    <div > 
        Food Item 
        <ul>
          
            <li> Name : { name } </li>
            <li> Calorie :{ calorie } </li>
            <li> Carb : { carb } </li>
            <li> Sugar :{ sugar } </li>
            <li> Fat : { fat } </li>
            <li> Protein : { protein } </li>
            <li> Serving Size :{ serving_size } gr </li>
            <button onClick={props.handleClick}> ❌</button>
        </ul>
    </div>
   )

 }

export default FoodItem