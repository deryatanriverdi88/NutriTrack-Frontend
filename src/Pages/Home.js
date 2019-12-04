import React  from 'react'
import { useSelector } from 'react-redux'
import DailySummary from '../Components/DailySummary'

function  Home(){

  const current_user = useSelector(state => {
    return state.user
})


const renderingHome = () =>{
  if(current_user.id){
    return (
    <>
    <h2> Welcome {current_user.name}</h2>
    <DailySummary user={current_user}/>
    </>
    ) 
  }else {
      return (<>
      <h2>Welcome to NutriTrack</h2>
      </>
      )
    }
  }

    // debugger
    return (
    <div id="home">Home Page
      {/* <h2>Welcome {current_user ? current_user.username : null} </h2>
     */}
    {renderingHome()}
      
    </div>
      )
   
    }


export default Home

