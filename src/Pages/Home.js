import React, { Component } from 'react'
import Profile from "./Profile"


class Home extends Component{

  state = {
    username: '',
    user: {}, 
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
      // debugger
      // console.log(userObject)
      this.setState({
        username: userObject.username,
        user: userObject
      })
    })
  }
 
  handleProfile = () => {
    this.setState({
      profile: !this.state.profile
    })
  }

  render() {
    console.log(this.state.profile)
    return (
    <div>Home Page
       <h3 onClick={this.handleProfile}>
         {this.state.profile ? "Home" : "Profile"}
       </h3>
       { this.state.profile ? <Profile user={this.state.user}/> : <h2>Welcome {this.state.username} </h2>}
      {/* <h2> Welcome {this.state.username} </h2> */}
    </div>
    )
     }
 }

export default Home
