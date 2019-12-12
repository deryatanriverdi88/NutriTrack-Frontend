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

 handleClose =()=>{
   this.props.history.push('/profile')
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
    fetch(`https://nutritrack.herokuapp.com/users/${this.props.current_user.id}`, {
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
        goal_calorie: this.state.goal_calorie,
        image: this.state.image,
        goal_carbs: this.state.goal_carbs,
        goal_fat: this.state.goal_fat,
        goal_sugar: this.state.goal_sugar,
        goal_protein: this.state.goal_protein
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
   
  const {name, username, age, weight, height, goal_calorie, goal_carbs, goal_fat, goal_sugar, goal_protein, image} = this.state
  console.log(this.state)
  return(
      <>
      <div className="edit-profile-div">
       
      {this.props.current_user.id  ? 
     
        <div className="edit-profile">
    <button className="close" onClick={this.handleClose}> ❌ </button>
    <form className="inputs" onSubmit={this.handleEditSubmit}>
    <label htmlFor="name">
      <span>Name :</span>
       <input 
         id="name"
         name="name"
         value={name}
         type="text"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="username">
      <span>Username : </span>
       <input 
         id="username"
         name="username"
         value={username}
         type="text"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="age">
     <span> Age: </span>
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
      <span>Image :</span>
        <input 
          id="image"
          name="image"
          value={image}
          type="text"
          onChange={this.handleChange}
        />
    </label>
    <label htmlFor="gender">
      <span>Gender :</span>
      <select name="gender" id="gender"
      onChange={this.handleChange}>
        <option> Select</option>
         <option value="Female">Female</option>
         <option value="Male">Male</option>
         <option value="Prefered not to say">Prefered not to say</option>
      </select>
    </label>
    <label htmlFor="weight" >
      <span>Weight :</span> 
       <input 
         id="weight"
         name="weight"
         value={weight}
         type="number"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="height">
      <span>Height : </span>
       <input 
         id="height"
         name="height"
         value={height}
         type="float"
         onChange={this.handleChange}
       />
    </label>
    <label htmlFor="goalCalorie" >
      <span>Daily goal calorie : </span>
       <input 
         id="goalCalorie"
         name="goal_calorie"
         value={goal_calorie}
         type="number"
         onChange={this.handleChange}
       />
    </label>

    <label htmlFor="goalCarbs" >
      <span>Daily carbs goal : </span>
       <input 
         id="goalCarbs"
         name="goal_carbs"
         value={goal_carbs}
         type="float"
         onChange={this.handleChange}
       />
    </label>

    <label htmlFor="goalFat" >
      <span>Daily fat goal : </span>
       <input 
         id="goalFat"
         name="goal_fat"
         value={goal_fat}
         type="float"
         onChange={this.handleChange}
       />
    </label>
   
    <label htmlFor="goalSugar" >
      <span>Daily sugar goal :</span> 
       <input 
         id="goalSugar"
         name="goal_sugar"
         value={goal_sugar}
         type="float"
         onChange={this.handleChange}
       />
    </label>

    <label htmlFor="goalProtein" >
      <span>Daily protein goal : </span>
       <input 
         id="goalProtein"
         name="goal_protein"
         value={goal_protein}
         type="float"
         onChange={this.handleChange}
       />
    </label>
    
  
    <input type="submit" id="submit"/>
    </form>
   </div> : null
     }
     </div>
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