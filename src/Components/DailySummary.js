import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DailySummary extends Component {

 render() {
    //  console.log(this.props)
  return(
   <div className="daily-summary shadow">
       
      
       <img className="main-image" src={this.props.user.image} alt={this.props.user.name}/>
    
   </div>
    )
   }
 }



export default DailySummary