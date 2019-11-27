import React, { Component } from 'react'
import { connect } from 'react-redux'



class Edit extends Component {
   
    
    
 state = {
     errors: ''
 }

 static getDerivedStateFromProps(props, state) {
     if(state.id !== props.current_user.id) {
        return props.current_user
     }
 }

 handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    // debugger
    event.preventDefault()
   //  debugger
    fetch(`http://localhost:3000/users/${this.props.current_user.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }, 
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        gender: this.state.gender,
        age: this.state.age,
        weight: this.state.weight,
        height: this.state.height,
        goal_calorie: this.state.goalCalorie,
        image: this.state.image
      })
    })
    .then(res => res.json())
    .then(userData =>{
    //   localStorage.setItem('token', userData.token)
      console.log(userData)
       if(userData){
        // debugger
         this.props.setUser(userData)
         this.props.history.push(`/profile`)
 
       }  else {
         this.setState({
           errors: userData.error[0]
         })
       }
    })
    
 }
 render(){
    // console.log("state ------", this.state)
    //  console.log(this.props.current_user)
    // console.log(this.state)
     const {name, username, age, weight, height, goal_calorie} = this.state
  return(
      <>
       
      {this.props.current_user.id  ? 
     
        <div>
       Edit Form
    <form onSubmit={this.handleLoginSubmit}>
    <label htmlFor="name">
      Name :
       <input 
         id="name"
         name="name"
         value={name}
         type="text"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="username">
      Username : 
       <input 
         id="username"
         name="username"
         value={username}
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
         value={age}
         type="number"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="image">
      Image :
        <input 
          id="image"
          name="image"
          value={this.state.image}
          type="text"
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
         value={weight}
         type="number"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="height">
      Height : 
       <input 
         id="height"
         name="height"
         value={height}
         type="float"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="goalCalorie" >
      Daily goal calorie : 
       <input 
         id="goalCalorie"
         name="goal_calorie"
         value={goal_calorie}
         type="number"
         onChange={this.handleChange}
       />
    </label>
  
    <input type="submit"/>
    </form>
   </div> : null
     }
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
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      current_user: state.user
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (Edit)