import React from 'react'
import {NavLink} from 'react-router-dom'
//import Logo from '../../../assets/icons/sidebar_logo.png'
import './Sidebar.css'
import Coin from '../../../images/coin-stack.png'
import Home from '../../../images/home-icon.png'
import Tick from '../../../images/tick-icon.png'
import Logo from '../../../images/logo.png'
export default function sidebar(props){
    return(
     <div className="sidebar-container">
         <img src={Logo} alt='logo' className='logoo'/>
        <ul>
                <li key={Math.random(10)}>
                    <NavLink to='/admin/home' className="link" activeClassName="active-link">
                        <img src={Home} alt="icon" className="icon" />
                        Home 
                    </NavLink>
                </li>
                <li key={Math.random(10)}>
                    <NavLink to='/admin/2' className="link" activeClassName="active-link">
                        <img src={Tick} alt="icon" className="icon" />
                        Requests 
                    </NavLink>
                </li>
                <li key={Math.random(10)}>
                    <NavLink to='/admin/3' className="link" activeClassName="active-link">
                        <img src={Coin} alt="icon" className="icon" />
                        Budget 
                    </NavLink>
                </li>
                <li key={Math.random(10)}>
                    <NavLink to='/admin/4' className="link" activeClassName="active-link">
                        <img src={Home} alt="icon" className="icon" />
                        Home 
                    </NavLink>
                </li><li key={Math.random(10)}>
                    <NavLink to='/admin/5' className="link" activeClassName="active-link">
                        <img src={Home} alt="icon" className="icon" />
                        Home 
                    </NavLink>
                </li>
        </ul>
     </div>  
    )
}