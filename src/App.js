import React from 'react';
import './App.css';
import Pages from "./Pages"


class App extends React.Component  {
 
  state = {
    pages: 'login'
  }

  redirect = (pages) =>{
    this.setState({
      pages: pages
    })
  }

  componentDidMount(){
    console.log(localStorage.token )
    if (localStorage.token === "undefined" || localStorage.length === 0){
      this.redirect('login')
    } else {
      this.redirect('home')
    }
  }


 render(){

      
console.log(localStorage === undefined)
       switch(this.state.pages){
         case "login":
           return <Pages.Login redirect={this.redirect}/>
         case 'home':
           return <Pages.Home/>
       }

 }
}

export default App;
