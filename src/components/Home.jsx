import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import './Style/home.css'

function Home() {

   return (
      <div className='homemain'>

         <div className="homeheading">
            <h1>Hello and Welcome to the Home</h1>
         </div>

         <div className="components">
            <Sidebar />
            <Main />
         </div>

      </div>
   )
}

export default Home