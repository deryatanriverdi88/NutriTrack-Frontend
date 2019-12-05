import React, { Component } from 'react'
import { connect } from 'react-redux'
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


//  searchedFoods = () =>{
//    if ( this.props.foods ) {
//        return this.props.foods.filter(food => {
//            if(this.state.searchValue !== ""){
//                return food.name.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
//            }
//        })
//    } else {
//        return  <> <p>No food</p></>
//    }
//  }


 render() {

// console.log(this.state.foodView, this.state.food)
// console.log(this.state.searchValue)
// console.log(this.props.foods)
// console.log(this.props)

   const searchedFoods = 
        this.props.foods.filter(food => {
    //    debugger
         if (this.state.searchValue !== ""){
            return food.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
         } 
   })
  return(
   <div className="add-food-div" >
       <form className="add-food-form">
           <label>
               Search
           </label>
          <input className="add-food-input" type="text" onChange={this.handleChange}/>

       </form>

       <ul className="foods">


            {    this.props.foods ?
                searchedFoods.map(food => {
                    return <li key={food.id} onClick={() => this.handleClick(food)}>
                        {food.name}
                    </li>
                }) : "Foods are loading..."
            }
            
       </ul>

       {
           this.state.foodForm ? 
           <>
                    <FoodForm food={this.state.food} handleClick={this.handleClick} />
                
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