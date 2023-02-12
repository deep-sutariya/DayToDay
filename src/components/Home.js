import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {

   const location=useLocation()
    
  return (
    <div className='Homepage'>

        <h1>Hello {location.state.id} and Welcome to the Home</h1>


     </div>
  )
}

export default Home