import React from 'react'
import { useSelector } from 'react-redux'

function  Profile(){

const current_user = useSelector(state => {
    // debugger 
    return state.user
})
console.log(current_user)
if(current_user.id) {
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
 return null
   
  }



export default Profile