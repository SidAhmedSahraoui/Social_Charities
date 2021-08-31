import React from 'react'
import { NavLink  } from 'react-router-dom'
//import Logo from '../../../assets/icons/sidebar_logo.png'
import './Sidebar.css'
import Coin from '../../../images/coin-stack.png'
import Home from '../../../images/home-icon.png'
import Tick from '../../../images/tick-icon.png'
export default function sidebar(props){
    return(
     <div className="sidebar-container">
        <ul>
                <li key={Math.random(10)}>
                    <NavLink exact to='/u/admin' className="link" activeClassName="active-link">
                        <img src={Home} alt="icon" className="icon" />
                        Home 
                    </NavLink>
                </li>
                <li key={Math.random(10)}>
                    <NavLink to='/u/admin/requests' className="link" activeClassName="active-link">
                        <img src={Tick} alt="icon" className="icon" />
                        Requests 
                    </NavLink>
                </li>
                <li key={Math.random(10)}>
                    <NavLink to='/u/admin/budget' className="link" activeClassName="active-link">
                        <img src={Coin} alt="icon" className="icon" />
                        Budget 
                    </NavLink>
                </li>
               
        </ul>
     </div>  
    )
}