import React from 'react'
import ContactCSS from "./CSS/Contact.module.css"
import Heading from '../../components/Heading/Heading'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { FaMapMarkerAlt, FaLocationArrow,FaGithub,FaLinkedin } from "react-icons/fa";
import { Box } from '@chakra-ui/react';

export default function Contact() {
  return (
    <>
      <div className={ContactCSS.container} id="contact">

<div className={ContactCSS.ContactPage}>
    <Heading  heading = "Contact" after = "Me"/>

    <div className={ContactCSS.content}>
          <div className={ContactCSS.contactInfo}>
              <h1 style={{color:"#0EB1D2",fontSize:"30px"}}>CONTACT INFO</h1>
              <ul>
                <li style={{marginLeft:"10px"}}><a target={"blank"} href="https://www.linkedin.com/in/vaibhavmougha/"><span style={{color:"#0EB1D2"}}><FaLinkedin/></span></a> <a target={"blank"} href="https://www.linkedin.com/in/vaibhavmougha/"><span style={{marginLeft:"10px"}}>vaibhavmougha</span></a></li>
                <li style={{marginLeft:"10px"}}><a target={"blank"} href="https://github.com/vaibhav-mougha"><span style={{color:"#0EB1D2"}}><FaGithub/></span></a> <a target={"blank"} href="https://github.com/vaibhav-mougha"><span style={{marginLeft:"10px"}}>vaibhav-mougha</span></a></li>
                <li><span style={{color:"#0EB1D2"}}><EmailIcon/></span> <span>tunu1994@gmail.com</span></li>
                <li><span style={{color:"#0EB1D2"}}><PhoneIcon/></span> <span>+91 8130963653</span></li>
                <li><span style={{color:"#0EB1D2"}}><FaMapMarkerAlt /></span> <span>Dilshad Garden, New Delhi, India</span></li>
              </ul>
          </div>

          <Box border="0.2rem solid #0EB1D2" borderRadius="1rem">
          <form className={ContactCSS.emailForm} action="https://formspree.io/f/mqkjrvek" method='POST' >
            <input type="text" name="name" id="name" placeholder='Name'/>
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="text" name="projectName" id="project" placeholder='Project Name' />
            <textarea type = "text" name = "message" id = "message" placeholder='Message'/>
            <button className={ContactCSS.send}>Send <FaLocationArrow /></button>
          </form>
          </Box>
    </div>
 
</div>

</div>
    </>
  )
}
