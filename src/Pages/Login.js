import React, { Component } from 'react'



class Login extends Component {
 state = {
     username: '',
     password: ''
 }
 render() {
  return(
   <div>

    Login Page

      <form>
          <label htmlFor="username">
            Username :
            <input type="text"
                    id="username"
                    value=""
                    name="username"
            />
          </label>
          <label htmlFor="password">
            Password :
            <input type="text"
                   id="password"
                   value=""
                   name="password"
            />
          </label>
          <input type="submit"/>
      </form>

   </div>
    )
   }
 }


export default Login