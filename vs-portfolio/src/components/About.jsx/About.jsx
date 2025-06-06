import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return <section className = {styles.container}>
        <h2 className = {styles.title} id = "About">About </h2>
        <div className = {styles.content}>
            <img src = "/assets/Headshot.png" alt = "headshot 2" className = {styles.aboutImage}/>
            <ul className = {styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <img src = "/assets/uiIcon.png" alt = "icon"/>
                    <div className = {styles.aboutItemText}>
                        <h3>Data Scientist</h3>
                        <p>I also love Broccoli</p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img src = "/assets/uiIcon.png" alt = "icon"/>
                    <div className = {styles.aboutItemText}>
                        <h3>Data Analyst</h3>
                        <p>I also love eggs</p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img src = "/assets/uiIcon.png" alt = "icon"/>
                    <div className = {styles.aboutItemText}>
                        <h3>Student</h3>
                        <p>I think I also like roast duck</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
};

