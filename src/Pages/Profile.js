import React, { Component } from 'react'

class Profile extends Component {
 state = {}
 render() {
     console.log(this.props)
     const {username, name, age, weight, height, goalCalorie, gender} = this.props.user
  return(
   <div> 
       <h1> Profile Page</h1>
       <h2>Name : {name}</h2>
       <ul>
        <li>Username : {username}</li>
        <li>Age : {age} </li>
        <li>Gender : {gender}</li>
        <li>Height : {height} </li>
        <li>Weight : {weight} </li>
        <li>Daily caolrie goal : {goalCalorie} </li> 
        <button> Edit profile!</button>
       </ul>
   </div>
    )
   }
 }



export default Profile