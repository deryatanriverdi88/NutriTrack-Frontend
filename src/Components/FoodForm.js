import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoodItem from "../Pages/FoodItem"




class FoodForm extends Component {

   
    state={
        serving: null,
        mealType: "",
        foodView: false,
        food: {}
    }

    handleChange = (e) => {
        // console.log('handle change', e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (foodItem) => {
        this.setState({
            foodView: !this.state.foodView, 
            food: foodItem
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
      
        fetch('http://localhost:3000/daily_intakes', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept':'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.current_user.id,
                food_id: this.props.food.id,
                meal_type: this.state.mealType,
                serving: this.state.serving

            })
        }).then(res => res.json())
        .then(dailyIntakeObject => {
            console.log(dailyIntakeObject)
        })
        
    }
    
    render() {

        console.log(this.props.current_user)
   
        // console.log(this.state)
        const {name, calorie, carb, sugar, fat, serving_size, protein} = this.props.food
        return(
            <div> 
                Food Form
           
        
                     <h3>{ name }</h3>
                     <form onSubmit={this.handleSubmit}>
                         <label htmlFor="serving"> Servings of </label> 
                            <input 
                                id="serving"
                                name="serving"
                                type="number"
                                onChange={this.handleChange}
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
                           <select id="mealType" name="mealType" onChange={this.handleChange}>
                                <option name=""></option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                           </select>
                           <input type="submit" value="Add to your dairy!" />
                     </form>
                    <button onClick={this.props.handleClick}> ❌</button>
                    <button onClick={() => this.handleClick(this.props.food)}> See nutrition info </button>
                    {
                        this.state.foodView ? 
                        <FoodItem food={this.state.food} handleClick={this.handleClick} /> : 
                        null
                    }
            
            </div>
           )
    }
  

 }
 const mapStateToProps = (state) => {
    return {
      current_user: state.user
    }
  }
  
 
 export default connect(mapStateToProps)(FoodForm)


