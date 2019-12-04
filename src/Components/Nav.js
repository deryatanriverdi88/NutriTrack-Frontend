import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav(props){

  const current_user = useSelector(state => {
    // debugger 
    return state.user
   })
 
 
  
  return(
    <>
    <div>
      <h1 id="header">NutriTrack</h1>
    </div>
     <nav id="nav-bar">
     {
       current_user.id ? 
       <>
       <Link className="link" to="/">Home</Link>
       <Link className="link"to="/profile">Profile</Link>
       <Link className="link"to="/daily-intake">My daily intake</Link>
       <Link className="link"to='/add-food'>Add Food</Link>
       <NavLink className="link " to='/login'><button id="logout" onClick={props.clearUser}>Logout</button></NavLink>
       </> : 
       <>
       <Link className="link" to="/">Home</Link>
       <Link className="link"to="/login">Login</Link>
       </>
     }
       
      
   </nav>
   </>
    )
   }




export default Nav