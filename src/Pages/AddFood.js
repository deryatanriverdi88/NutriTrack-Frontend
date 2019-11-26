import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddFood extends Component {
 state = {
     searchValue:""
 }

 handleChange = (e) => {
     console.log(e.target.value)
     this.setState({
         searchValue: e.target.value
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


// console.log(this.state.searchValue)
// console.log(this.props.foods)

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
                    return <li>
                        {food.name}
                    </li>
                })
            }
            
       </ul>


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