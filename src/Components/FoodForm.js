import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

class FoodForm extends Component {


    state={
        serving: null,
        mealType: ""
    }
    // 
    render() {
   
        console.log(this.props)
        const {name, calorie, carb, sugar, fat, serving_size, protein} = this.props.food
        return(
            <div> 
                Food Form
           
        
                     <h3>{ name }</h3>
                     <form>
                         <label htmlFor="serving"> Servings of </label> 
                            <input 
                                id="serving"
                                name="serving"
                                type="number"
                            />
                            <input
                                type="hidden" 
                                id="user"
                                name="userId"
                            />
                            <input
                                type="hidden" 
                                id="food"
                                name="foodId"
                            />
                            <input
                                type="hidden" 
                                id="mealType"
                                name="mealType"
                            />
                         <label htmlFor="mealType"> Meal Type </label>
                           <select id="mealType" name="mealType">
                                <option name=""></option>
                                <option name="breakfast">Breakfast</option>
                                <option name="lunch">Lunch</option>
                                <option name="dinner">Dinner</option>
                                <option name="snack">Snack</option>
                           </select>
                     </form>
                    <button onClick={this.props.handleClick}> ❌</button>
                    <button> Add { name } to your diary! </button>
            
            </div>
           )
    }
  

 }


export default FoodForm