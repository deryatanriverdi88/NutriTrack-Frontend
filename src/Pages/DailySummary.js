import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DailySummary extends Component {
 state = {}
 render() {
    //  console.log(this.props)
  return(
   <div className="daily-summary">
       
      
       <img className="profile-image" src={this.props.user.image} alt={this.props.user.name}/>
       <h3>
           Remaining calories based on your daily calorie input :  {this.props.user.remaining_calories} cal
           <br></br>
           <Link to="/add-food"> Add Food!</Link>
       </h3>
   </div>
    )
   }
 }



export default DailySummary