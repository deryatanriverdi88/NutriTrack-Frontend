import React, { Component } from 'react'
import Profile from "./Profile"
import { connect } from 'react-redux'


class Home extends Component{

  state = {

    profile: false
  }

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
 
  handleProfile = () => {
    this.setState({
      profile: !this.state.profile
    })
  }

  render() { 
  
    console.log(this.props.current_user)
    // debugger
    return (
    <div>Home Page
       <h3 onClick={this.handleProfile}>
         {this.state.profile ? "Home" : "Profile"}
       </h3>
       { this.state.profile ? <Profile/> : <h2>Welcome {this.props.current_user ? this.props.current_user.username : null} </h2>}
    </div>
      )
   }
 }

function mapDispatchToProps(dispatch){
  return {
    setUser: (userObject) => {
      dispatch({
          type: 'SET_USER', payload: userObject
        })
    }
  }
}

function mapStateToProps(state){
  return {
    current_user: state.current_user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

