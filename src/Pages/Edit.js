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
    console.log(event.target.value)

    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleEditSubmit = (event) => {
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
        image: this.state.image,
        goal_carbs: this.state.goalCarbs,
        goal_fat: this.state.goalFat,
        goal_sugar: this.state.goalSugar,
        goal_protein: this.state.goalProtein
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
   
  const {name, username, age, weight, height, goalCalorie, goalCarbs, goalFat, goalSugar, goalProtein, image} = this.state
  console.log(name, goalCalorie)
  return(
      <>
       
      {this.props.current_user.id  ? 
     
        <div>
       Edit Form
    <form onSubmit={this.handleEditSubmit}>
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
          value={image}
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
         name="goalCalorie"
         value={goalCalorie}
         type="number"
         onChange={this.handleChange}
       />
    </label>

    <label htmlFor="goalCarbs" >
      Daily carbs goal : 
       <input 
         id="goalCarbs"
         name="goalCarbs"
         value={goalCarbs}
         type="float"
         onChange={this.handleChange}
       />
    </label>

    <label htmlFor="goalFat" >
      Daily fat goal : 
       <input 
         id="goalFat"
         name="goalFat"
         value={goalFat}
         type="float"
         onChange={this.handleChange}
       />
    </label>
   
    <label htmlFor="goalSugar" >
      Daily sugar goal : 
       <input 
         id="goalSugar"
         name="goalSugar"
         value={goalSugar}
         type="float"
         onChange={this.handleChange}
       />
    </label>

    <label htmlFor="goalProtein" >
      Daily protein goal : 
       <input 
         id="goalProtein"
         name="goalProtein"
         value={goalProtein}
         type="float"
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