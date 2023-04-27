import React from 'react'
import SidebarProfilePictureCSS from "./SidebarProfilePicture.module.css"
// import profilePicture from "profilePic.jpg"


export default function SidebarProfilePicture() {
  return (
    <div className={SidebarProfilePictureCSS.container}>
            <div className={SidebarProfilePictureCSS.picture} style = {{backgroundImage : `url("./images/profilePic.jpg")`}}>

            </div>
    </div>
  )
}
