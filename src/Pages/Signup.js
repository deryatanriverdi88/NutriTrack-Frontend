import React, { Component } from 'react'



class Signup extends Component {
 state = {
     name: '',
     username: '',
     password: ''
 }
 render() {
  return(
   <div>Signup Page

     <form>
       <label htmlFor="name">
         Name :
          <input 
            id="name"
            name="name"
            value=""
            type="text"
          />
       </label>
       <label htmlFor="username">
         Username : 
          <input 
            id="username"
            name="username"
            value=""
            type="text"
          />
       </label>
       <label htmlFor="age">
         Age: 
          <input 
            id="age"
            age="age"
            value=""
            type="number"
          />
       </label>
       <label htmlFor="gender">
         Gender :
         <select name="gender" id="gender">
            <option value="Female">Female</option>
            <option value="Female">Male</option>
            <option value="Prefered not to say">Prefered not to say</option>
         </select>
       </label>
       <label htmlFor="weight">
         Weight : 
          <input 
            id="weight"
            name="weight"
            value=""
            type="number"
          />
       </label>
       <label htmlFor="height">
         Height : 
          <input 
            id="height"
            name="height"
            value=""
            type="number"
          />
       </label>
       <label htmlFor="goalCalorie">
         Daily goal calorie : 
          <input 
            id="goalCalorie"
            name="goalCalorie"
            value=""
            type="number"
          />
       </label>
       <label htmlFor="password">
         Password : 
          <input 
            id="password"
            name="password"
            value=""
            type="password"
          />
       </label>
     </form>
   </div>
    )
   }
 }


export default Signup