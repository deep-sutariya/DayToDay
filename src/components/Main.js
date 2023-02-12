import React from 'react'
import './Style/main.css'

const search = require('../assets/search_icon.png');

function Main() {
  return (
    <div className='main'>
      
      <div className='searchbar row-wise'>
        <img className='img_logo' src={search} alt='DayToDay' />
        <input placeholder='Search here...'></input>
      </div>

    {/* <div className='row-wise'>
    <div className='quote-box'>
            Quote Related Card
      </div>
    </div> */}
     
        
    </div>
  )
}

export default Main