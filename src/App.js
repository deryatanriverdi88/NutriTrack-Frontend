import React from 'react';
import './App.css';
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Components/Nav'


class App  extends React.Component{

   componentDidMount(){
      fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(userObject => {
      this.props.setUser(userObject)

    })
  }


 
 render (){
  return (
    <Router>
        <Nav/>
        <Routes/>
     </Router>
    )
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
     setUser: (userObject) => {
       dispatch({
           type: 'SET_USER', payload: userObject
         })
     }
   }
 }
 
 const mapStateToProps = (state) => {
   return {
     current_user: state.current_user
   }
 }
 

export default connect(mapStateToProps, mapDispatchToProps)(App)
