import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DailySummary extends Component {

 render() {
    //  console.log(this.props)
  return(
   <div className="daily-summary shadow">
       
      <q>It is health that is real wealth and not pieces of gold and silver.<cite>  -Mahatma Gandhi</cite></q>
       <img className="main-image" src={this.props.user.image} alt={this.props.user.name}/>
    
   </div>
    )
   }
 }



export default DailySummary