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



const deleteUser = () => {
  // console.log('delete user')
  fetch(`http://localhost:3000/users/${current_user.id}`, 
  {
    method: 'DELETE'
  })
  .then(
    localStorage.clear()
  )
}

if(current_user.id) {

  const {username, name, age, weight, height, goal_calorie, gender, image} = current_user
  return(
    
    <div> 
        <h1> Profile Page</h1>
        <img className="profile-image" src={image} alt="name"/>
        <h2>Name : {name}</h2>
        <ul>
         <li>Username : {username}</li>
         <li>Age : {age} </li>
         <li>Gender : {gender}</li>
         <li>Height : {height} </li>
         <li>Weight : {weight} </li>
         <li>Daily calorie goal : {goal_calorie} </li> 
         <Link to="/edit"> Edit Profile!</Link>
         <Link to='/login' onClick={deleteUser}>Delete Profile</Link>
    
        </ul>
    </div>
     )
}
 return (
      <>
      <h3>
       No user
      </h3>
      </>
   )
   
  }
  



export default Profile