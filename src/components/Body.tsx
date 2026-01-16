import { Outlet } from 'react-router-dom'
import Header from './Header'
import ScrollToHash from './ScrollToHash'
import { useState } from 'react'

function Body() {

  const [fromHome,setFromHome]=useState(false)

  return (
    <div>
       <Header fromHome={fromHome}/> 
       <ScrollToHash/>
       <Outlet context={{setFromHome}}/>
    </div>
  )
}

export default Body