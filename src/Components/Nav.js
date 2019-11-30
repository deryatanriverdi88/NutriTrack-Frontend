import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav(props){

  const current_user = useSelector(state => {
    // debugger 
    return state.user
   })
 
 
  
  return(
    
   <nav>
     {
       current_user.id ? 
       <>
       <Link to="/">Home</Link>
       <Link to="/profile">Profile</Link>
       <Link to="/daily-intake">My daily intake</Link>
       <NavLink to='/login'><button onClick={props.clearUser}>Logout</button></NavLink>
       </> : 
       <>
       <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
       </>
     }
       
      
   </nav>
    )
   }




export default Nav