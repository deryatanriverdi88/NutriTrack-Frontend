import React, { Component } from 'react'



class Login extends Component {
 state = {
     username: '',
     password: '',
     errors: ''
 }


handleChange = (event) => {
  // console.log(event.target.value)
  this.setState({
    [event.target.name] : event.target.value
  })
}

handleSubmit = (event) => {
   event.preventDefault()
   fetch('http://localhost:3000/login', {
     method: 'POST',
     headers: {
       "Content-Type" : "application/json",
       "Accept" : "application/json"
     }, 
     body: JSON.stringify({
       username: this.state.username,
       password: this.state.password
     })
   })
   .then(res => res.json())
   .then(userData =>{
     localStorage.setItem('token', userData.token)
     console.log(userData)
      if(userData.token){
        this.props.redirect('home')
      }  else {
        this.setState({
          errors: userData.error,
          username: "",
          password: ''
        })
      }
   })
}



 render() {
  //  console.log(this.state)
  return(
   <div>
    <h1> Login Page </h1>
  
    {
      this.state.errors
    }

      <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username :
            <input type="text"
                    id="username"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password :
            <input type="password"
                   id="password"
                   value={this.state.password}
                   name="password"
                   onChange={this.handleChange}
            />
          </label>
          <input type="submit"/>
      </form>

   </div>
    )
   }
 }


export default Login