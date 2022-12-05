import React from 'react'
import Heading from '../../components/Heading/Heading'
import SkillIcons from '../../components/SkillIcons/SkillIcons'
import SkillsCSS from "./CSS/Skills.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { HiBolt } from "react-icons/hi2";


export default function Skills() {
  return (
    <>
    <div className={SkillsCSS.container} id="skills">
    <div className={SkillsCSS.skillPage}>
        <Heading heading = "Skills" before = "My"/>

        <div className={SkillsCSS.skillContainer}>

            <div className={SkillsCSS.img} style = {{backgroundImage : `url("./images/Programming.gif")`, backgroundRepeat:"no-repeat", backgroundPosition : "center"}}>
            </div>
            <div className={SkillsCSS.img}>
              <h1 className={SkillsCSS.heading}>Full Stack Development</h1>

              <div className={SkillsCSS.skillIcons}>
                  <SkillIcons img = "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"/>
                  <SkillIcons img = "https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
                  <SkillIcons img = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/>
                  <SkillIcons img = "https://cdn-icons-png.flaticon.com/512/5968/5968672.png"/>
                  <SkillIcons img = "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"/>
                  <SkillIcons img = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"/>
                  <SkillIcons img = "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"/>
                  <SkillIcons img = "./images/mongodb.png"/>
                  <SkillIcons img = "./images/git1.png"/>
              </div>

              <ul className={SkillsCSS.desc}>
                <li> <span><HiBolt/></span> Develop highly interactive User Interfaces and Backend for web applications</li>
                <li><span><HiBolt/></span> Building responsive website front end using ReactJS</li>
                <li><span><HiBolt/></span>Creating application backend in Node, Express,</li>
              </ul>

            </div>
            

            <div className={SkillsCSS.img}>
              <h1 className={SkillsCSS.heading}>Cloud Infra-Architecture</h1>

              <div className={SkillsCSS.skillIcons}>
                  <SkillIcons img = "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"/>
                  <SkillIcons img = "https://cdn.iconscout.com/icon/free/png-256/heroku-2752161-2284978.png"/>
                  <SkillIcons img = "./images/fire.png"/>
                  <SkillIcons img = "https://avatars.githubusercontent.com/u/65916846?v=4?s=100"/>
              </div>

              <ul className={SkillsCSS.desc}>
                <li><span><HiBolt/></span>Experience working on multiple cloud platforms</li>
                <li><span><HiBolt/></span> Experience hosting and managing websites</li>
                <li><span><HiBolt/></span>Experience with Continuous Integration</li>
              </ul>

            </div>
            <div className={SkillsCSS.img} style = {{backgroundImage : `url("./images/data.gif")`, backgroundRepeat:"no-repeat", backgroundPosition : "center", backgroundSize : "cover"}}></div>


        </div>

    </div>
    </div>
    </>
  )
}
