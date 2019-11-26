import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DailySummary extends Component {
 state = {}
 render() {
    //  console.log(this.props)
  return(
   <div className="daily-summary">
       
      
       <img className="profile-image" src={this.props.user.image}/>
       <h3>
           Remaining calories based on your daily calorie input :  {this.props.user.goal_calorie} cal
           <br></br>
           <Link to="/add-food"> Add Food!</Link>
       </h3>
   </div>
    )
   }
 }



export default DailySummary