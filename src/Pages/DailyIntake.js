import React, { Component } from 'react'
import { connect } from 'react-redux'

class DailyIntake extends Component {
 state = {
   
 }



 
 render() {
    
     console.log(this.props.current_user.daily_intakes)
   const  {current_user} =this.props

    const breakfast = () => {
        if(this.props.current_user.id && this.props.current_user.daily_intakes) {
            let arr = this.props.current_user.daily_intakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'breakfast'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id}>
                  <td > {dailyIntake.food.name }</td> 
                  <td>{dailyIntake.serving}</td>
                  <td> {dailyIntake.food.calorie}</td> 
                  <td> {dailyIntake.food.fat} </td> 
                  <td> {dailyIntake.food.carbs}</td> 
                  <td>{dailyIntake.food.protein}</td> 
                  <td> {dailyIntake.food.sugar}</td>
                  </tr>
             })
           }
           return "nope!"
        }

    const lunch = () => {
        if(this.props.current_user.id) {
            let arr = this.props.current_user.daily_intakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'lunch'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id}>
                  <td> {dailyIntake.food.name }</td> 
                  <td>{dailyIntake.serving}</td>
                  <td> {dailyIntake.food.calorie}</td> <td> {dailyIntake.food.fat} </td> 
                  <td> {dailyIntake.food.carbs}</td> 
                  <td> {dailyIntake.food.protein}</td> 
                  <td> {dailyIntake.food.sugar}</td>
                </tr>
             })
           }
           return "nope!"
        }

    const dinner = () => {
        if(this.props.current_user.id) {
            let arr = this.props.current_user.daily_intakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'dinner'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id}>
                  <td> {dailyIntake.food.name }</td>
                  <td>{dailyIntake.serving}</td>
                  <td> {dailyIntake.food.calorie}</td> 
                  <td> {dailyIntake.food.fat} </td> 
                  <td> {dailyIntake.food.carbs}</td> 
                  <td> {dailyIntake.food.protein}</td> 
                  <td> {dailyIntake.food.sugar}</td>
                </tr>
             })
           }
           return "nope!"
        }

    const snacks = () => {
        if(this.props.current_user.id) {
            let arr = this.props.current_user.daily_intakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'snack'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id}>
                <td> {dailyIntake.food.name }</td> 
                <td>{dailyIntake.serving}</td>
                <td> {dailyIntake.food.calorie}</td> 
                <td> {dailyIntake.food.fat} </td> 
                <td> {dailyIntake.food.carbs}</td> 
                <td> {dailyIntake.food.protein}</td> 
                <td> {dailyIntake.food.sugar}</td>
                </tr>
             })
           }
           return "nope!"
        }
    
        
    
  return(
<div>

<table>
    <thead>
     <tr>
        <th width="10%"></th> 
        <th width="10%">Serving</th>
        <th width="10%">Calorie</th> 
       
        <th width="10%">Fat</th>
        <th width="10%">Carbs</th>
        <th width="10%">Protein</th>
        <th width="10%">Sugar</th>
     </tr>
    </thead>
    <tbody>
        
    <tr>
      <th width="10%">Breakfast</th>
    </tr> 
      {breakfast()}
    <tr>
    <td>Total </td>
    </tr>
      
    <tr>
      <th width="10%">Lunch</th> 
    </tr>
     {lunch()}

     <tr>
    <td>Total </td>
    </tr>
    <tr>
      <th width="10%">Dinner</th> 
    </tr>
     {dinner()}
     <tr>
    <td>Total </td>
    </tr>
    <tr>
      <th width="10%">Snack</th> 
    </tr>
      {snacks()} 
       <tr>
    <td>Total </td>
    </tr>
    <tr>
      <th>
        General Total
      </th>
        <td>{current_user.total_servings}</td>
        <td>{current_user.total_calories}</td>
        <td>{current_user.total_fat}</td>
        <td>{current_user.total_carbs}</td>
        <td>{current_user.total_protein}</td>
        <td>{current_user.total_sugar}</td>
    </tr>
    </tbody>
 </table>
 </div>
    )
   }
 }
 const mapStateToProps = (state) => {
    return {
      current_user: state.user
    }
  }
  
 
 export default connect(mapStateToProps)(DailyIntake)