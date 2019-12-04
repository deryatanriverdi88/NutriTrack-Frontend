import React from 'react';
import './App.css';
import Routes from './Routes'
import { connect } from 'react-redux'
import Nav from './Components/Nav'
import './Home.css'
import './Nav.css'
import './DailySummary.css'
import './Profile.css'



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
        <Nav clearUser={this.logOut}/>
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
