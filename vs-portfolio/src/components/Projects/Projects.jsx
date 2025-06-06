import React from "react";
import projects from "./projects.json";
import { Pcard } from "./Pcard";
import styles from "./Projects.module.css";


export const Projects = () => {
    return(
    <section className = {styles.container} id ="Project">
        <h2 className = {styles.title}>Projects</h2>
        <div className = {styles.projects}>
            {
                projects.map((project,id) => {
                    return(
                        <Pcard key ={id} project = {project}/>
                    );
                
            })}
        </div>
    </section> 
    );
}