import React from 'react';
import { Switch , Route } from 'react-router-dom' 
import Pages from './Pages'



const Routes = () => {
  return(
    <div>
          <Switch>
            <Route exact path="/" component={Pages.Home}/> 
            <Route exact path="/profile" component= {Pages.Profile}/> 
            <Route exact path="/login" component={Pages.Login}/> 
            <Route exact path='/edit' component={Pages.Edit}/>
            <Route exact path="/add-food" component={Pages.AddFood}/>
            <Route exact path="/food/:id" component={Pages.FoodItem}/>
            <Route exact path="/daily-intake" component={Pages.DailyIntake}/>
        
          </Switch>
    </div>
   )

 }

export default Routes