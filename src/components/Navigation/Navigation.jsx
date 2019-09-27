import React from 'react';
import nav from './Navigarion.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a><NavLink to='/home'>Home </NavLink></a>
                </li>
                <li>
                    <a><NavLink to='/myPosts'>Posts </NavLink></a>
                </li>
                <li>
                    <a><NavLink to='/messages'>Messages </NavLink></a>
                </li>
                <li>
                    <a><NavLink to='/profile'>Profile </NavLink></a>
                </li>
            </ul>
<div className={nav.searchBar}>
   <input className={nav.search} type="text"/>
    <input type="submit" value="Seach"/>
</div>
            <div className={nav.logreg}>
                <input type="submit" value="SignUp"/>
                <input type="submit" value="SignIn"/>

            </div>
        </nav>

    )
}

export default NavBar;