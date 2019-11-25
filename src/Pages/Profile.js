import React, { Component } from 'react'
import { useSelector } from 'react-redux'

function  Profile(){

const current_user = useSelector(state => {
    return state.current_user
})

const {username, name, age, weight, height, goalCalorie, gender} = current_user
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
        <button> Delete your profile !</button>
       </ul>
   </div>
    )
   
  }



export default Profile