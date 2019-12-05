  
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditDailyIntake from '../Components/EditDailyIntake'

class DailyIntake extends Component {
 state = {
   editForm: false, 
   dailyIntake: {},
   serving: null,
   mealType: "", 
   dailyIntakes: [],
   date: new Date().toLocaleDateString()
 }




handleDeleteClick = (e, dailyIntakeItem) => {
   console.log(dailyIntakeItem)
   fetch(`http://localhost:3000/daily_intakes/${dailyIntakeItem.id}`, {
         method: 'DELETE'
       }).then(res => {
         const newArray = this.state.dailyIntakes.filter(dailyIntake =>{
           return dailyIntake.id !== dailyIntakeItem.id
          })
          this.setState({
           dailyIntakes: newArray
         })
       })
     
}

handleEditForm = () =>{
  this.setState({
    editForm: false
  })
}


handleClick = (e, dailyIntakeItem) => {
//  console.log(dailyIntakeItem)
 this.setState({
   editForm: !this.state.editForm,
   dailyIntake: dailyIntakeItem,
   serving: dailyIntakeItem.serving,
   mealType: dailyIntakeItem.meal_type
 })
}

handleDateClick = () =>{
  this.setState({
    date: new Date().toLocaleDateString() 
  })
  const date = new Date().toLocaleDateString()
  this.fetchDailyIntake()
  this.props.history.push(`/daily-intake/${date}`)
}

componentDidMount(){
  this.fetchDailyIntake()
  const date = this.props.match.params.date 
  if ( date ) {
    this.setState({
      date: date
    })
  } else {
    this.setState({
      date: new Date().toLocaleDateString()
    })
  }
  // debugger
}

fetchDailyIntake =  () => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: localStorage.token
    }
  }
  fetch('http://localhost:3000/daily_intakes', config)
  .then(res => res.json())
  .then(dailyIntakeItems => {
    // console.log(dailyIntakeItems)
    
   const newIntakes = dailyIntakeItems.filter(dailyIntake => {
     if (this.state.date === new Date().toLocaleDateString()) {
       return dailyIntake.changed_date === this.state.date
      } else {
        return  dailyIntake.date === this.state.date
      }
   })
        this.setState({
          dailyIntakes: newIntakes
        })
 
  })
}

handleChange = (e) =>{
  // console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleDateChange = (e) => {
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  })
  this.fetchDailyIntake()
 
  this.props.history.push(`/daily-intake/${e.target.value}`)
}

handleEditSubmit = (e) => {
  e.preventDefault()
  // console.log('submit')
  fetch(`http://localhost:3000/daily_intakes/${this.state.dailyIntake.id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify({ 
     meal_type: this.state.mealType,
     serving: this.state.serving
    })
  })
  .then(res => res.json())
  .then(intake => {
    const newItem =  this.state.dailyIntakes.map(intakeItem => {
        return intakeItem.id === intake.id ? intake : intakeItem
    })
    // this.props.setUser(user) 
    this.setState({
      dailyIntake:  intake,
      dailyIntakes:  newItem
    })
  })
} 

 render() {

  
  console.log(this.state.date)
 

   const  {current_user} =this.props

    const breakfast = () => {
        if(this.state.dailyIntakes) {
            let arr = this.state.dailyIntakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'breakfast'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id} >
                  <td> {dailyIntake.food.name } {dailyIntake.changed_date} <button className="edit-intake" onClick={(e) => this.handleClick(e, dailyIntake)}> Edit </button></td> 
                  <td>{dailyIntake.serving} ✖️  ({dailyIntake.food.serving_size} g)</td>
                  <td className="calorie"> {dailyIntake.food.calorie * dailyIntake.serving}</td> 
                  <td className="fat"> {(dailyIntake.food.fat * dailyIntake.serving).toFixed(2)} </td> 
                  <td className="carbs"> {(dailyIntake.food.carbs * dailyIntake.serving).toFixed(2)}</td> 
                  <td className="protein"> {(dailyIntake.food.protein * dailyIntake.serving).toFixed(2)}</td> 
                  <td className="sugar"> {(dailyIntake.food.sugar * dailyIntake.serving).toFixed(2)}</td>
                  <td className="delete" onClick={(e) => this.handleDeleteClick(e, dailyIntake)}> <span> ❌ </span> </td>
                  </tr>
             })
           }
           return "There is no food logged in.."
        }

    const lunch = () => {
        if(this.state.dailyIntakes) {
            let arr = this.state.dailyIntakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'lunch'
            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id}>
                  <td>  {dailyIntake.food.name } {dailyIntake.changed_date} <button className="editIntake" onClick={(e) => this.handleClick(e, dailyIntake)}> Edit </button></td> 
                  <td>{dailyIntake.serving} ✖️  ({dailyIntake.food.serving_size} g)</td>
                  <td className="calorie"> {dailyIntake.food.calorie * dailyIntake.serving}</td> 
                  <td className="fat"> {(dailyIntake.food.fat * dailyIntake.serving).toFixed(2)} </td> 
                  <td className="carbs"> {(dailyIntake.food.carbs * dailyIntake.serving).toFixed(2)}</td> 
                  <td className="protein"> {(dailyIntake.food.protein * dailyIntake.serving).toFixed(2)}</td> 
                  <td className="sugar"> {(dailyIntake.food.sugar * dailyIntake.serving).toFixed(2)}</td>
                  <td className="delete" onClick={(e) => this.handleDeleteClick(e, dailyIntake)}> <span> ❌ </span> </td>
                </tr>
             })
           }
           return "There is no food logged in.."
        }

    const dinner = () => {
        if(this.state.dailyIntakes )  {
            let arr = this.state.dailyIntakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'dinner'

            }) 
            return arr.map(dailyIntake => {
                return  <tr key={dailyIntake.food.id} >
                  <td> {dailyIntake.food.name } {dailyIntake.changed_date}<button className="edit-intake" onClick={(e) => this.handleClick(e, dailyIntake)}> Edit </button> </td>
            <td>{dailyIntake.serving} ✖️  ({dailyIntake.food.serving_size} g)</td>
                  <td className="calorie"> {dailyIntake.food.calorie * dailyIntake.serving}</td> 
                  <td className="fat"> {(dailyIntake.food.fat * dailyIntake.serving).toFixed(2)} </td> 
                  <td className="carbs"> {(dailyIntake.food.carbs * dailyIntake.serving).toFixed(2)}</td> 
                  <td className="protein"> {(dailyIntake.food.protein * dailyIntake.serving).toFixed(2)}</td> 
                  <td className="sugar"> {(dailyIntake.food.sugar * dailyIntake.serving).toFixed(2)}</td>
                  <td  onClick={(e) => this.handleDeleteClick(e, dailyIntake)}> <span> ❌ </span> </td>
                
                </tr>
              
             })
           }
           return "There is no food logged in.."
        }

    const snacks = () => {
        if(this.state.dailyIntakes) {
            let arr = this.state.dailyIntakes.filter(dailyIntake => {
                return dailyIntake.meal_type === 'snack'
            }) 
           
            return arr.map(dailyIntake => {
              // debugger
                return  <tr key={dailyIntake.food.id} >
                  
                <td> {dailyIntake.food.name } {dailyIntake.changed_date} <button className="edit-intake" onClick={(e) => this.handleClick(e, dailyIntake)}> Edit </button></td> 
                <td> {dailyIntake.serving} ✖️ ({dailyIntake.food.serving_size} g)</td>
                <td className="calorie"> {dailyIntake.food.calorie * dailyIntake.serving}</td> 
                <td className="fat"> {(dailyIntake.food.fat * dailyIntake.serving).toFixed(2)} </td> 
                <td className="carbs"> {(dailyIntake.food.carbs * dailyIntake.serving).toFixed(2)}</td> 
                <td className="protein"> {(dailyIntake.food.protein * dailyIntake.serving).toFixed(2)}</td> 
                <td className="sugar">  {(dailyIntake.food.sugar * dailyIntake.serving).toFixed(2)}</td>
               
                <td className="deleteIntake" width="10%" onClick={(e) => this.handleDeleteClick(e, dailyIntake)}> <span> ❌ </span> </td>
                </tr>
             })
           }
           return "There is no food logged in.."
        }

        const totals = () => {
          let totals = {
            protein: 0,
            sugar: 0,
            carbs: 0,
            fat: 0,
            servings: 0,
            calories: 0
          }
          if (this.state.dailyIntakes.length){
            this.state.dailyIntakes.forEach((i) => {
              totals.servings += i.serving
              totals.protein += i.total_protein
              totals.sugar += i.total_sugar 
              totals.carbs += i.total_carbs
              totals.fat += i.total_fat
              totals.calories += i.total_calories
            })
          }
         return totals
      }      
      
      
      const remaining = () => {
        let total = {
          protein: 0,
          sugar: 0,
          carbs: 0,
          fat: 0,
          calories: 0
        }
        if (this.state.dailyIntakes.length){
             
          this.state.dailyIntakes.forEach((i) => {
            // debugger
            total.calories = current_user.goal_calorie - totals().calories
            total.protein = current_user.goal_protein - totals().protein
            total.sugar = current_user.goal_sugar - totals().sugar
            total.carbs = current_user.goal_carbs - totals().carbs
            total.fat = current_user.goal_fat - totals().fat
             
    
          })
        }
     
       return total
       
    }
    
  return(
<div className="daily-intake">
 <p className='select-day'> Select a date</p> 
 <input type="date" className="date" value={this.state.date} onChange={this.handleDateChange} name="date" />
  
  <button className="date today"onClick={this.handleDateClick}>Today :{this.state.date} </button>

{ this.state.editForm ?  <EditDailyIntake intake={this.state.dailyIntake} handleClick={this.handleEditForm }handleChange={this.handleChange} handleEditSubmit={this.handleEditSubmit} /> : null }

<table >
    <thead>
     <tr className="row">
        <th width="20%" style={{border: 'none'}}></th> 
        <th width="10%">Serving</th>
        <th className="calorie"  width="10%">Calorie ( kcal )</th> 
       
        <th width="10%" className="fat">Fat ( g )</th>
        <th width="10%" className="carbs">Carbs ( g )</th>
        <th width="10%" className="protein">Protein ( g )</th>
        <th width="10%" className="sugar">Sugar ( g )</th>
        <th width="1%" style={{border: 'none'}}></th>
       
     </tr>
    </thead>
    <tbody>
        
    <tr className="row">
      <th width="0%">Breakfast</th>
    </tr> 
      {breakfast() }
      
      
    <tr className="row">
      <th width="10%">Lunch</th> 
    </tr>
     {lunch()}
    <tr className="row">
      <th width="10%">Dinner</th> 
    </tr>
     {dinner()}
  
    <tr className="row">
      <th width="10%">Snack</th> 
    </tr>
      {snacks()} 
     <tr className="row">
       </tr> 
    <tr className="row">
      
      <th>
        Total
      </th>

        <td>{(totals().servings)}</td>
        <td className="calorie">{(totals().calories)}</td>
        <td className="fat">{(totals().fat).toFixed(2)}</td>
        <td className="carbs">{(totals().carbs).toFixed(2)}</td>
        <td className="protein">{(totals().protein).toFixed(2)}</td>
        <td className="sugar">{(totals().sugar).toFixed(2)}</td>
        
    </tr>
    <tr className="row">
      <th>Your daily goal  </th>
      <td></td>
      <td className="calorie">{current_user.goal_calorie}</td>
      <td className="fat">{current_user.goal_fat}</td>
      <td className="carbs">{current_user.goal_carbs}</td>
      <td className="protein">{current_user.goal_protein}</td>
      <td className="sugar">{current_user.goal_sugar}</td>
    </tr>
    <tr className="row">
    <th>Remaining </th>
   
    <td></td>
      <td className="calorie">{remaining().calories}</td>
      <td className="fat">{(remaining().fat).toFixed(2)}</td>
      <td className="carbs">{(remaining().carbs).toFixed(2)}</td>
      <td className="protein">{(remaining().protein).toFixed(2)}</td>
      <td className="sugar">{(remaining().sugar).toFixed(2)}</td>
    
    </tr>
    </tbody>
 </table>
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


export default connect(mapStateToProps, mapDispatchToProps)(DailyIntake)