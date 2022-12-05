import React from 'react'
import ContactCSS from "./CSS/Contact.module.css"
import Heading from '../../components/Heading/Heading'
import { EmailIcon, PhoneIcon, WarningIcon } from '@chakra-ui/icons'
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className={ContactCSS.container} id="contact">

<div className={ContactCSS.ContactPage}>
    <Heading  heading = "Contact" after = "Me"/>

    <div className={ContactCSS.content}>
          <div className={ContactCSS.contactInfo}>
              <h1 style={{color:"#0EB1D2"}}>CONTACT INFO</h1>
              <ul>
                <li><span style={{color:"#0EB1D2"}}><EmailIcon/></span> <span>tunu1994@gmail.com</span></li>
                <li><span style={{color:"#0EB1D2"}}><PhoneIcon/></span> <span>+91 8130963653</span></li>
                <li><span style={{color:"#0EB1D2"}}><FaMapMarkerAlt /></span> <span>Dilshad Garden, New Delhi, India</span></li>
              </ul>
          </div>
          <div className={ContactCSS.emailForm}>
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="text" name="projectName" id="project" placeholder='Project Name' />
            <textarea type = "text" name = "message" id = "message" placeholder='Message'/>
            <button className={ContactCSS.send}>Send <FaLocationArrow /></button>
          </div>
    </div>
 
</div>

</div>
    </>
  )
}
