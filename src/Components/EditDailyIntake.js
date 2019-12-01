import React, { Component } from 'react'

class  EditDailyIntake extends Component {
 state = {}
 render() {
  return(
   <div>
       Edit form
       <form onSubmit={this.props.handleEditSubmit}>
          <label htmlFor="serving"> Servings of </label> 
            <input 
                id="serving" 
                name="serving"
                type="number"
                onChange={this.props.handleChange}
                
            />
          
           <label htmlFor="mealType"> Meal Type </label>
             <select id="mealType" name="mealType" onChange={this.props.handleChange}>
                <option name=""></option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
             </select>
             <input type="submit" value="Add to your diary!" />
        </form>
   </div>
    )
   }
 }




export default EditDailyIntake
