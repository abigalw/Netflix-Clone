import React from 'react'
import "./Header.css"
import NetflixLogo from "../../assets/images/netflix-3.svg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
  <div className='header_outer_container'>
    <div className="header_container">
      {/* Left Section */}
      <div className="header_left">
        <ul>
          <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li> 
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="header_right">
        <ul>
          <li> <SearchIcon /></li>
          <li> <NotificationsNoneIcon /></li>
          <li><AccountBoxIcon /></li> 
          <li><ArrowDropDownIcon /></li> 
        </ul>
      </div>
    </div>
 </div>
  )
}

export default Header
