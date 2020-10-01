import React from 'react';
import { Switch , Route } from 'react-router-dom' 
import Pages from './Pages'



const Routes = ({logOut}) => {
  return(
    <div>
          <Switch>
            <Route exact path="/" component={Pages.Home}/> 
            <Route
              path='/profile'
              render={(props) => (
                <Pages.Profile {...props} logOut={logOut} />
              )}
            />
            <Route exact path="/login" component={Pages.Login}/> 
            <Route exact path='/edit' component={Pages.Edit}/>
            <Route exact path="/add-food" component={Pages.AddFood}/>
            <Route exact path="/food/:id" component={Pages.FoodItem}/>
            <Route exact path="/daily-intake/:date" component={Pages.DailyIntake}/>
            <Route path="/daily-intake" component={Pages.DailyIntake}/>
          </Switch>
    </div>
   )

 }

export default Routes