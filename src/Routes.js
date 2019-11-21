import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pages from './Pages'

export const  Routes = () => {
  return(
    <div>
      
         <Switch>
            <Route path="/signup" component={Pages.Signup}/>
            <Route path="/login" component={Pages.Login}/>
        </Switch>
     
    </div>
   )

 }

