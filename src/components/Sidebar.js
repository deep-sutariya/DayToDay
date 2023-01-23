import React from 'react'
import './Style/sidebarr.css'


// import SearchIcon from '@mui/icons-material/Search';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import LogoutIcon from '@mui/icons-material/Logout';

const logo = require('../assets/logofinal_icon.png');
const dashboard = require('../assets/dashboard_icon.png');
const feedback = require('../assets/feedback_icon.png');
const logout = require('../assets/logoutfinal_icon.png');
const notification = require('../assets/notification_icon.png');
const search = require('../assets/search_icon.png');
const home = require('../assets/home_icon.png');

function Sidebar() {

    return (

        <div className='sidebar'>

            <div className='logo_with_title'>
                <img className='img_logo' src={logo} alt='DayToDay' />
                <h2 className='header_title'>DayToDay</h2>
            </div>

            <div className='vertical_navbar'>
                <div className='row-wise'>
                    {/* <NotificationsNoneIcon fontSize='large'></NotificationsNoneIcon> */}
                    <img className='img_logo' src={notification} alt='DayToDay' />
                    <span className='text_span'>Notification</span>
                </div>

                <div className='row-wise'>
                    {/* <SearchIcon fontSize='large'></SearchIcon> */}
                    <img className='img_logo' src={search} alt='DayToDay' />
                    <span className='text_span'>Find Traders</span>
                </div>

                <div className='row-wise'>
                    {/* <HomeOutlinedIcon fontSize='large'></HomeOutlinedIcon> */}
                    <img className='img_logo' src={home} alt='DayToDay' />
                    <span className='text_span'>Home</span>
                </div>

                <div className='row-wise'>
                    {/* <QueryStatsIcon fontSize='large'></QueryStatsIcon> */}
                    <img className='img_logo' src={dashboard} alt='DayToDay' />
                    <span className='text_span'>Dashboard</span>
                </div>

                <div className='row-wise'>
                    {/* <FeedbackIcon fontSize='large'></FeedbackIcon> */}
                    <img className='img_logo' src={feedback} alt='DayToDay' />
                    <span className='text_span'>Feedback</span>
                </div>

            </div>

            <div className='logout'>
                <div className='row-wise'>
                    {/* <LogoutIcon fontSize='large'></LogoutIcon> */}
                    <img className='img_logo' src={logout} alt='DayToDay' />
                    <span className='text_span'>Logout</span>
                </div>
            </div>

        </div>
    )
}

export default Sidebar