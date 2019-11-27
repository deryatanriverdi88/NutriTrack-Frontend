import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoodItem from './FoodItem'
import FoodForm from '../Components/FoodForm'

class AddFood extends Component {
 state = {
     searchValue:"",
     foodForm: false,
     food: {}
 }

 handleChange = (e) => {
     console.log(e.target.value)
     this.setState({
         searchValue: e.target.value
         
     })

 }

 handleClick = (foodItem) => {
     console.log('click')
     this.setState({
         foodForm: !this.state.foodForm,
         food: foodItem
     })
 }

 componentDidMount(){
    fetch('http://localhost:3000/foods')
    .then(res=>res.json())
    .then(foodsData => {
        // console.log(foodsData)
        this.props.getFoods(foodsData)
    })
}
 render() {

// console.log(this.state.foodView, this.state.food)
// console.log(this.state.searchValue)
// console.log(this.props.foods)
// console.log(this.props)

   const searchedFoods = this.props.foods.filter(food => {
    //    debugger
         if (this.state.searchValue !== ""){
            return food.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
         } 
   })
  return(
   <div>

       Add food 

       <form>
           <label>
               Search
           </label>
          <input type="text" onChange={this.handleChange}/>

       </form>

       <ul>


            {
                searchedFoods.map(food => {
                    return <li key={food.id} onClick={() => this.handleClick(food)}>
                        {food.name}
                    </li>
                })
            }
            
       </ul>

       {
           this.state.foodForm ? 
           <>
                    <FoodForm food={this.state.food} handleClick={this.handleClick} />
                    {/* <FoodItem food={this.state.food} handleClick={this.handleClick} /> */}
           </> : 
           <>
           </>
       }


   </div>
    )
   }
 }

 const mapDispatchToProps = (dispatch) =>{
    return {
      getFoods: (foodObject) => {
        dispatch({
            type: 'GET_FOODS', payload: foodObject
          })
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
     foods: state.foods
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps) (AddFood)