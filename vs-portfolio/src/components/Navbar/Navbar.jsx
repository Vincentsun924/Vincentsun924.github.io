import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    //use a semantic html tag, we want to be more specific and use the nav tag// 
    //takes us to the top of the portfolio when clicked href
    return (
        <nav className = {styles.navbar}>
            <a classname = {styles.title} href = "/"> Portfolio </a>
            <div classname = {styles.menu}>
                <ul classname = {styles.menuItems}>
                    <li> 
                        <a href = "#About"> About</a> 
                    </li>
                    <li> 
                        <a href = "#Experience"> Experience</a> 
                    </li>
                    <li> 
                        <a href = "#Project"> Projects</a> 
                    </li>
                    <li> 
                        <a href = "#Contact"> Contact</a> 
                    </li>
                </ul>
            </div>
        </nav>

    );
};