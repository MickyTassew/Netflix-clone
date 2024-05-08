import React, { useState, useEffect } from 'react'
import './Header.css'
import NetflixLogo from '../../assets/images/netflix.png'
import UserIcon from '../../assets/images/Netflix-avatar.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener('scroll', scrollHandler);
    
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    



  return (
    <>
        <div className={`header_outer_container ${show ? 'header_scrolled' : ''}`}>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li> <img src={NetflixLogo} alt='Netflix logo' width="100"></img></li>

                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyLists</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className='header-right'>
            <ul>
                    <li><SearchIcon /> </li>
                    <li><NotificationsNoneIcon /> </li>
                    <li><img src={UserIcon} alt='Netflix logo' width="25"></img></li> 
                    <li><ArrowDropDownIcon /> </li>
                
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header


