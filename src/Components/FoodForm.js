import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoodItem from "../Pages/FoodItem"
import { withRouter } from 'react-router-dom'




class FoodForm extends Component {

   
    state={
        serving: null,
        mealType: "",
        date: new Date().toLocaleDateString(),
        foodView: false,
        food: {}
        
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
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
      
        fetch('https://nutritrack.herokuapp.com/daily_intakes', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept':'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.current_user.id,
                food_id: this.props.food.id,
                meal_type: this.state.mealType,
                serving: this.state.serving,
                date: this.state.date

            })
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            this.props.setUser(user)
            setTimeout(() => {
                this.props.history.push(`/daily-intake/${this.state.date}`)
            }, 50)
        })
        // .then( this.props.history.push('/daily-intake'))
        
    }


    render() {
       
        console.log(this.state.date)
   
        // console.log(this.state.serving)
        const {name} = this.props.food
        return(
            <div className="background-for-z-index">
            <div className="food-form" > 
    
        
                     <h3 className="food-name">{ name }</h3>
                     <form onSubmit={this.handleSubmit}>
                         <label htmlFor="serving"> <span className="serving"> Servings of </span></label> 
                            <input 
                                id="serving"
                                name="serving"
                                type="number"
                                onChange={this.handleChange}
                                value={this.state.serving}
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
                        <label htmlFor="date">
                            <span className="date">Date</span>
                             <input 
                                type="date"
                                id="date"
                                name='date'
                                value={this.state.date}
                                onChange={this.handleChange}
                             />
                        </label>
                         <label htmlFor="mealType"> <span className="meal-type">Meal Type</span> </label>
                           <select id="mealType" name="mealType" onChange={this.handleChange}>
                                <option name=""></option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                           </select>
                           <input className="add-your-diary" type="submit" value="Add to your diary!" />
                     </form>
                    <button className="x" onClick={this.props.handleClick}> <span > ❌ </span></button>
                    <button className="nutrition-info-button" onClick={() => this.handleClick(this.props.food)}> See nutrition info </button>
                    {
                        this.state.foodView ? 
                        <FoodItem food={this.state.food} handleClick={this.handleClick} /> : 
                        null
                    }
            
            </div>
            </div>
           )
    }
  

 }
 const mapDispatchToProps = (dispatch) =>{
    return {
     setUser: (userObject) => {
       dispatch({
           type: 'SET_USER', payload: userObject
         })
     }, 
     clearUser: () => {
      dispatch({
        type: 'CLEAR_USER'
      })
     }
   }
   }
   
   const mapStateToProps = (state) => {
   return {
     current_user: state.user
   }
   }
   
   
   export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodForm))


