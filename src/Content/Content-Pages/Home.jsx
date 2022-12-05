import React from 'react'
import HomeCSS from "./CSS/Home.module.css";


export default function Home() {
  return (
    <>
        <div className={HomeCSS.container} id = "home">
            <div className={HomeCSS.content}>
                <h2 className={HomeCSS.greeting}><b>HI THERE!</b></h2>
                <h1 className={HomeCSS.title}><b>I'M</b> <span><b>VAIBHAV MOUGHA</b></span></h1>
                <p className={HomeCSS.description}>A Full-Stack Web Developer trained by Masai School, Bengaluru. I have a passion to create useful projects and systems which can contribute in everyone's wellbeing. I go to full extent in execution.</p>
                <a href="#about"><button className={HomeCSS.button}>About Me</button></a>
            </div>
        </div>
    </>
  )
}
