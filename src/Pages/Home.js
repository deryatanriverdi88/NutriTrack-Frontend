import React, { Component } from 'react'
import { useSelector } from 'react-redux'

function  Home(){

  const current_user = useSelector(state => {
    return state.user
})

    // debugger
    return (
    <div>Home Page
      <h2>Welcome {current_user ? current_user.username : null} </h2>
    </div>
      )
   }
 


export default Home

