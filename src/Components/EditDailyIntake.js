import React, { Component } from 'react'

class  EditDailyIntake extends Component {
 state = {}
 render() {

  console.log(this.props)
  return(
    <div className="background-for-z-index">
   <div className="edit-daily-intake">
   
   <button onClick={this.props.handleClick}className="x"> ❌ </button>
  
       <form onSubmit={this.props.handleEditSubmit}>
          <h3>{this.props.intake.food.name}</h3>
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
             <input type="submit" value="Add to your diary!" className="add-your-diary"/>
            
        </form>
   </div>
   </div>
    )
   }
 }




export default EditDailyIntake
