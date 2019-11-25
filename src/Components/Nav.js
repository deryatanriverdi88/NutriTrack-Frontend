import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class Nav extends Component {

 render() {
  return(
   <nav>
       <Link to="/profile">Profile</Link>
       <Link to="/login">Login</Link>
       <Link to="/">Home</Link>
   </nav>
    )
   }
 }



export default Nav