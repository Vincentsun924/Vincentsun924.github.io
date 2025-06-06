import react from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className ={styles.container}>
        <div className ={styles.content}>
            <h1 className ={styles.title}>
                Hello, Its Vince
            </h1>
            <p className ={styles.description}>I like tomatoes</p>
            <a href = "mailto:vincentsun9204@gmail.com" className ={styles.contactBtn}> Contact me</a>
        </div>
        <img src = "/assets/Headshot.png" alt = "profile-pic" className ={styles.heroImg}></img>
            <div className ={styles.topBlur}/>
            <div className ={styles.bottomBlur}/>

    </section>;
};

