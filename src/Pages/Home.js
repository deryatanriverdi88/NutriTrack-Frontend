import React  from 'react'
import { useSelector } from 'react-redux'
import DailySummary from '../Components/DailySummary'
import { Link} from 'react-router-dom'


function  Home(){

  const current_user = useSelector(state => {
    return state.user
})


const renderingHome = () =>{
  if(current_user.id){
    return (
    <>
    <DailySummary user={current_user}/>
    </>
    ) 
  }else {
      return (<>
      <h2 id="greeting">Welcome to NutriTrack</h2>
      <div class="login-message">
      <p>Start free!</p>
      <Link to="/login"> Login </Link>
      </div>
      </>
      )
    }
  }

    // debugger
    return (
    <div id="home">
      {/* <h2>Welcome {current_user ? current_user.username : null} </h2>
     */}
    {renderingHome()}
      
    </div>
      )
   
    }


export default Home

