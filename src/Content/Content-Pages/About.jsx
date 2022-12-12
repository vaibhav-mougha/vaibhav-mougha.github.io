import React from 'react'
import Box from '../../components/aboupage-project-description/Box'
import Heading from '../../components/Heading/Heading'
import AboutCSS from "./CSS/About.module.css"

export default function About() {

  const handleClick = () => {
        window.open("https://drive.google.com/file/d/1CBMMbK5vkkORXI45WBPyabbnz6dHZtZI/view")
  };

  return (
    <>
      <div className={AboutCSS.container} id="about">

        <div className={AboutCSS.aboutPage}>
            <Heading  heading = "About" after = "Me"/>

            <div className={AboutCSS.content}>
                <div className={AboutCSS.profileDes}>
                <h1 className={AboutCSS.title}>Hi, I'm <span>Vaibhav Mougha</span></h1>
                <p className={AboutCSS.aboutMe}>An aspiring Full-Stack Web Developer with a strong interest in projects requiring conceptual and analytical thinking. Self-motivated and hardworking fresher seeking for an opportunity to work a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.</p>
                <a target="_blank" href="./Vaibhav-Mougha-Resume.pdf" download onClick={handleClick}><button className={AboutCSS.cv} >Download CV</button></a>
                </div>
                <div className={AboutCSS.projectDes}>
                  <Box count="3" title = "Total Project"/>
                  <Box count="1" title = "Group Project"/>
                  <Box count="2" title = "Individual Project"/>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}
