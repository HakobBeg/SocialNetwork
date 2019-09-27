import React from 'react';
import nav from './Navigarion.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/home' activeClassName={nav.active}>Home </NavLink>
                </li>
                <li>
                    <NavLink to='/myPosts' activeClassName={nav.active}>Posts </NavLink>
                </li>
                <li>
                    <NavLink to='/messages' activeClassName={nav.active}>Messages </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' activeClassName={nav.active}>Profile </NavLink>
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