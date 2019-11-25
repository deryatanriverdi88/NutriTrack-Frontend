import React from 'react';
import { Switch , Route } from 'react-router-dom' 
import Pages from './Pages'



const Routes = () => {
  return(
    <div>
          <Switch>
            <Route exact path="/" component={Pages.Home}/> 
            <Route exact path="/profile" component={Pages.Profile}/> 
            <Route exact path="/login" component={Pages.Login}/> 
          </Switch>
    </div>
   )

 }

export default Routes