import React, { Component } from 'react'
import { connect } from 'react-redux'

class DailyIntake extends Component {
 state = {
   
 }


// handleClick = (e, dailyIntakeItem) => {
//   console.log(dailyIntakeItem.id)
//   this.setState({
//     show: false
//   })
//   fetch(`http://localhost:3000/daily_intakes/${dailyIntakeItem.id}`, {
//      method: 'DELETE'
//    })
// }

 
 render() {
  //  console.log(this.props.current_user.daily_intakes)
  //  console.log(this.state.dailyIntakes)
  // console.log(this.state.dailyIntake)
   const  {current_user} =this.props

    const breakfast = () => {
        if(this.props.current_user.id && this.props.current_user.daily_intakes ) {
            let arr = this.props.current_user.daily_intakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'breakfast'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id} >
                  <td > {dailyIntake.food.name }</td> 
                  <td>{dailyIntake.serving}</td>
                  <td> {dailyIntake.food.calorie}</td> 
                  <td> {dailyIntake.food.fat} </td> 
                  <td> {dailyIntake.food.carbs}</td> 
                  <td>{dailyIntake.food.protein}</td> 
                  <td> {dailyIntake.food.sugar}</td>
                  {/* <td onClick={(e) => this.handleClick(e, dailyIntake)}> <span> ❌ </span> </td> */}
                  </tr>
             })
           }
           return "There is no food logged in.."
        }

    const lunch = () => {
        if(this.props.current_user.id && this.props.current_user.daily_intakes ) {
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
                  {/* <td onClick={(e) => this.handleClick(e, dailyIntake)}> <span> ❌ </span> </td> */}
                </tr>
             })
           }
           return "There is no food logged in.."
        }

    const dinner = () => {
        if(this.props.current_user.id && this.props.current_user.daily_intakes )  {
            let arr = this.props.current_user.daily_intakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'dinner'

            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id} >
                  <td> {dailyIntake.food.name }</td>
                  <td>{dailyIntake.serving}</td>
                  <td> {dailyIntake.food.calorie}</td> 
                  <td> {dailyIntake.food.fat} </td> 
                  <td> {dailyIntake.food.carbs}</td> 
                  <td> {dailyIntake.food.protein}</td> 
                  <td> {dailyIntake.food.sugar}</td>
                  {/* <td onClick={(e) => this.handleClick(e, dailyIntake)}> <span> ❌ </span> </td> */}
                
                </tr>
              
             })
           }
           return "There is no food logged in.."
        }

    const snacks = () => {
        if(this.props.current_user.id && this.props.current_user.daily_intakes ) {
            let arr = this.props.current_user.daily_intakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'snack'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id} >
                <td> {dailyIntake.food.name }</td> 
                <td>{dailyIntake.serving}</td>
                <td> {dailyIntake.food.calorie}</td> 
                <td> {dailyIntake.food.fat} </td> 
                <td> {dailyIntake.food.carbs}</td> 
                <td> {dailyIntake.food.protein}</td> 
                <td> {dailyIntake.food.sugar}</td>
                {/* <td onClick={(e) => this.handleClick(e, dailyIntake)}> <span> ❌ </span> </td> */}
                </tr>
             })
           }
           return "There is no food logged in.."
        }
    
        
    
  return(
<div>

<table>
    <thead>
     <tr>
        <th width="10%"></th> 
        <th width="10%">Serving</th>
        <th width="10%">Calorie ( kcal )</th> 
       
        <th width="10%">Fat ( g )</th>
        <th width="10%">Carbs ( g )</th>
        <th width="10%">Protein ( g )</th>
        <th width="10%">Sugar ( g )</th>
       
     </tr>
    </thead>
    <tbody>
        
    <tr>
      <th width="10%">Breakfast</th>
    </tr> 
      {breakfast()}
      
    <tr>
      <th width="10%">Lunch</th> 
    </tr>
     {lunch()}
    <tr>
      <th width="10%">Dinner</th> 
    </tr>
     {dinner()}
  
    <tr>
      <th width="10%">Snack</th> 
    </tr>
      {snacks()} 
     <tr>
       </tr> 
    <tr>
      
      <th>
        Total
      </th>
        <td>{current_user.total_servings}</td>
        <td>{current_user.total_calories}</td>
        <td>{current_user.total_fat}</td>
        <td>{current_user.total_carbs}</td>
        <td>{current_user.total_protein}</td>
        <td>{current_user.total_sugar}</td>
        
    </tr>
    <tr>
      <th>Your daily goal  </th>
      <td></td>
      <td>{current_user.goal_calorie}</td>
      <td>{current_user.goal_fat}</td>
      <td>{current_user.goal_carbs}</td>
      <td>{current_user.goal_protein}</td>
      <td>{current_user.goal_sugar}</td>
    </tr>
    <tr>
    <th>Remaining </th>
      <td></td>
      <td>{current_user.remaining_calories}</td>
      <td>{current_user.remaining_fat}</td>
      <td>{current_user.remaining_carbs}</td>
      <td>{current_user.remaining_protein}</td>
      <td>{current_user.remaining_sugar}</td>
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