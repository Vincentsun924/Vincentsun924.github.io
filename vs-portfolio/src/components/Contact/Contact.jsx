import React from "react";
import styles from "./Contact.module.css";


export const Contact = () => {
    return <footer className = {styles.container}>
        <div className = {styles.text}>
            <h2>Contact</h2>
            <p>Please Reach Out!</p>
        </div>
        <ul className = {styles.links}>
            <li className = {styles.link}>
                <img src = "/assets/emailIcon.png" alt = "Email Icon"/>
                <a href = "mailto:sunvince@bu.edu">Sunvince@bu.edu</a>
            </li>
            <li className = {styles.link}>
                <img src = "/assets/linkedinIcon.png" alt = "Github Icon"/>
                <a href = "https://www.linkedin.com/in/vincent-sun-09020419780j/">Linkedin.com/VincentSun</a>
            </li>
            <li className = {styles.link}>
                <img src = "/assets/githubIcon.png" alt = "Github Icon"/>
                <a href = "https://github.com/Vincentsun924">Github.com/VincentSun</a>
            </li>
        </ul>
    </footer>
    
    
    ;
}