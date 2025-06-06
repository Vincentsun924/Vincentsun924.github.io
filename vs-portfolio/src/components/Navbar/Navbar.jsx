//checks if some item is open or in use or not
import React, {useState} from "react";
import styles from "./Navbar.module.css";



export const Navbar = () => {
    //make a consts useState from react to make this open when we want and close when not in use
    const [menuOpen, setMenuOpen] = useState(false);

    //use a semantic html tag, we want to be more specific and use the nav tag// 
    //takes us to the top of the portfolio when clicked href
    return (
        //you can theoretically name anything "styles" it just iterates and checks the css for each keyword that style is attached to
        <nav className = {styles.navbar}>
            <a className = {styles.title} href = "/"> 
            Portfolio 
            </a>
            <div className = {styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen
                    ? "/assets/closeIcon.png"
                    : "/assets/menubar.png"}
                    alt = "menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    />
                {/* string interpolation $, allows us to add another className css and the "&&" just says that if menu is false then the stuff after is not applied and if menuOpen is true then it is applied */}
                <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
                // makes it close when a page is clicked
                onClick = {() => setMenuOpen(false)}
                >
                    <li> 
                        <a href = "#About"> About</a> 
                    </li>
                    <li> 
                        <a href = "#Experience"> Experience</a> 
                    </li>
                    <li> 
                        <a href = "#Project">Projects</a> 
                    </li>
                    <li> 
                        <a href = "#Contact"> Contact</a> 
                    </li>
                </ul>
            </div>
        </nav>

    );
};