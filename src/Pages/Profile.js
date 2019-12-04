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

  const {username, name, age, weight, height, goal_calorie, gender, image, goal_carbs, goal_fat, goal_protein, goal_sugar} = current_user
  return(
    
    <div className="profile-div"> 
      <div className="img-div">
      
        <img className="profile-image" src={image} alt="name"/>
        </div>
        <div className="clear"></div>
        <div className="info-div">
       
        <ul>
         <li><span className="bold">Name :</span> {name}</li>
         <li><span className="bold">Username : </span>{username}</li>
         <li><span className="bold">Age :</span> {age} </li>
         <li><span className="bold">Gender :</span> {gender}</li>
         <li><span className="bold">Height :</span> {height} </li>
         <li><span className="bold">Weight :</span> {weight} </li>
         <li><span className="bold">Daily calorie goal :</span> {goal_calorie} </li> 
         <li><span className="bold">Daily carbs goal :</span> {goal_carbs}</li>
         <li><span className="bold">Daily fat goal :</span> {goal_fat}</li>
         <li><span className="bold">Daily protein goal :</span> {goal_protein}</li>
         <li><span className="bold">Daily sugar goal :</span> {goal_sugar}</li>
         <Link to="/edit" className="buttons edit"> Edit Profile!</Link>
         <Link to='/login' className="buttons" onClick={deleteUser}>Delete Profile</Link>
        
        </ul>
        </div>
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