import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function  Profile(){

const current_user = useSelector(state => {
    // debugger 
    return state.user
})
// console.log(localStorage.token)
// console.log(current_user.user)

if(current_user.id) {
  const {username, name, age, weight, height, goal_calorie, gender} = current_user
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
         <li>Daily caolrie goal : {goal_calorie} </li> 
         <Link to="./edit"> Edit profile!</Link>
         <button> Delete your profile !</button>
        </ul>
    </div>
     )
}
 return (
      <>
      <h3>
        Loading....
      </h3>
      </>
   )
   
  }



export default Profile