import React, { Component } from 'react'


class Home extends Component{

  state = {
    username: '',
    user: {}
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


  render() {
    return (
    <div>Home Page

      <h2> Welcome {this.state.username} </h2>
    </div>
    )
     }
 }

export default Home
