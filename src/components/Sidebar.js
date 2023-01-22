import React from 'react'
import './sidebarr.css'
import Icon from '@mui/material/Icon';
import SvgIcon from '@mui/material/SvgIcon';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
    
    const styles = {

        largeIcon: {
          width: 60,
          height: 60,
        },
      
      };
    


  return (
    <div className='sidebar'>
        <div className='logo_with_title'>
                <img className='img_logo' src='/logowithback.png' alt='DayToDay'/>
                <h2 className='header_title'>DayToDay</h2>
        </div>
        <div className='vertical_navbar'>
                <div className='row-wise class1'>
                    <NotificationsNoneIcon fontSize='large'></NotificationsNoneIcon>
                    <span className='text_span'>Notification</span>
                </div>
               
                <div className='row-wise'>
                    <SearchIcon fontSize='large'></SearchIcon>
                    <span className='text_span'>Find Traders</span>
                </div>

                <div className='row-wise'>
                    <HomeIcon fontSize='large'></HomeIcon>
                    <span className='text_span'>Home</span>
                </div>

                <div className='row-wise'>
                    <QueryStatsIcon fontSize='large'></QueryStatsIcon>
                    <span className='text_span'>Dashboard</span>
                </div>
                
                <div className='row-wise'>
                    <FeedbackIcon fontSize='large'></FeedbackIcon>
                    <span className='text_span'>Feedback</span>
                </div>

                <div className='row-wise hori_line'>
                    <span>horizontal line</span>
                </div>

                <div className='row-wise'>
                    <LogoutIcon fontSize='large'></LogoutIcon>
                    <span className='text_span'>Logout</span>
                </div>
        </div>
    
    
    </div>
  )
}

export default Sidebar