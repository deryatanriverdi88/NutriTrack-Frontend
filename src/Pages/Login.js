import React, { Component } from 'react'
import { connect } from 'react-redux'



class Login extends Component {
 state = {
   
     username: '',
     password: '',
     name: '',
     age: null,
     gender: "",
     height: null,
     weight: null,
     goalCalorie: null,
     errors: '', 
     loginOn: true
 }

loginForm = () => {
  return (<form onSubmit={this.handleLoginSubmit}>
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
          </form>)
}

signupForm = () => {
  return (
    <form onSubmit={this.handleSignupSubmit}>
    <label htmlFor="name">
      Name :
       <input 
         id="name"
         name="name"
         value={this.state.name}
         type="text"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="username">
      Username : 
       <input 
         id="username"
         name="username"
         value={this.state.username}
         type="text"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="age">
      Age: 
       <input 
         name="age"
         id="age"
         age="age"
         value={this.state.age}
         type="number"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="gender">
      Gender :
      <select name="gender" id="gender"
      onChange={this.handleChange}>
        <option> Select</option>
         <option value="Female">Female</option>
         <option value="Male">Male</option>
         <option value="Prefered not to say">Prefered not to say</option>
      </select>
    </label>
    <label htmlFor="weight" >
      Weight : 
       <input 
         id="weight"
         name="weight"
         value={this.state.weight}
         type="number"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="height">
      Height : 
       <input 
         id="height"
         name="height"
         value={this.state.height}
         type="float"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="goalCalorie" >
      Daily goal calorie : 
       <input 
         id="goalCalorie"
         name="goalCalorie"
         value={this.state.goalCalorie}
         type="number"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="password" >
      Password : 
       <input 
         id="password"
         name="password"
         value={this.state.password}
         type="password"
         onChange={this.handleChange}
       />
    </label>
    <input type="submit"/>
    </form>
  )
}

handleChange = (event) => {
  // console.log(event.target.value)
  this.setState({
    [event.target.name] : event.target.value
  })
}

handleClick = ()=>{
  this.setState({
    loginOn: !this.state.loginOn
  })
}

handleLoginSubmit = (event) => {

   event.preventDefault()
  //  debugger
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
        this.props.setUser(userData.current_user)
        this.props.history.push(`/profile`)

      }  else {
        this.setState({
          errors: userData.error
        })
      }
   })
   .then(
     this.setState({
      username: "",
      password: ''
     })
   )
}

handleSignupSubmit = (event) => {
  event.preventDefault()
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      'Content-Type':"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify({
      name: this.state.name,
      username: this.state.username,
      age: this.state.age,
      gender: this.state.gender,
      weight: this.state.weight,
      height: this.state.height,
      goal_calorie: this.state.goalCalorie,
      password: this.state.password
    })
  })
  .then(res => res.json())
  .then(userData => {
    // console.log(userData)
    localStorage.setItem('token', userData.token)
    if(userData.token){
      this.props.redirect('home')
    }  else {
      this.setState({
        errors: userData.error
       
      })
    }
  })
  .then(
    this.setState({
      username: "",
      password: '',
      age: null,
      weight: null,
      height: null, 
      goalCalorie: null, 
      gender: ""
    })
  )
}

 render() {
 console.log(this.props.history)
//    console.log(this.current_user)
  return(
   <div>
    {
      this.state.errors
    }
    <h1> {this.state.loginOn ? "Login Page" : "Sign Up Page" }</h1>

    <p>{this.state.loginOn ? 
      "Don't have an account yet?" : 
      "I have an account" } 
      <b onClick={this.handleClick}>
      { this.state.loginOn ? 
        "Sign Up!" : 
        "Login!" }
        </b>
       </p>
    {
      this.state.loginOn ? 
      this.loginForm()
     :
      this.signupForm()
    }
   </div>
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
    current_user: state.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Login)