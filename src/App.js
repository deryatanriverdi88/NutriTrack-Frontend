import React from 'react';
import './App.css';
import Routes from './Routes'
import { connect } from 'react-redux'
import Nav from './Components/Nav'
import './CSS/Home.css'
import './CSS/Nav.css'
import './CSS/DailySummary.css'
import './CSS/Profile.css'
import './CSS/Login.css'
import './CSS/AddFood.css'
import './CSS/FoodForm.css'
import './CSS/DailyIntake.css'
import './CSS/FoodItem.css'
import './CSS/EditProfile.css'
import './CSS/EditIntake.css'


class App  extends React.Component{

   componentDidMount(){
      fetch("https://nutritrack.herokuapp.com/profile", {
      headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(userObject => {
      this.props.setUser(userObject)

    })
  }
 
  clearToken = () =>{
    localStorage.clear()
  }

  logOut = () =>{
    this.props.clearUser()
    this.clearToken()
    
    // this.props.history.push('/login')
  }
 
 render (){
  //  console.log(this.props)
  return (
     <>
        <Nav logOut={this.logOut}/>
        <Routes logOut={this.logOut} />
    </>
    )
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
     setUser: (userObject) => {
       dispatch({
           type: 'SET_USER', payload: userObject
         })
     }, 
     clearUser: () => {
      dispatch({
        type: 'CLEAR_USER'
      })
     }
   }
 }
 
 const mapStateToProps = (state) => {
   return {
     current_user: state.user
   }
 }
 

export default connect(mapStateToProps, mapDispatchToProps)(App)
