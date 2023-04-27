import React, { useContext } from 'react'
import SidebarCSS from "./Sidebar.module.css"
import SidebarButtons from './SidebarButtons'
import SidebarProfilePicture from './SidebarProfilePicture'
import { CloseIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FontentAPI } from '../ContextApp/Fontent'

export default function Sidebar() {
  let {showSideBar, removeSideBarClick} = useContext(FontentAPI);
  console.log(showSideBar)
  return (
    <>
        <div id="nav-menu" className={SidebarCSS.container} style = {showSideBar? {display : "block", left : "0px", zIndex : "1000"} : null}>
          <CloseIcon color={'white'} id = {SidebarCSS.close} onClick = {() =>{removeSideBarClick()}} style = {showSideBar? {display : "block"} : null}/>
            <div className={SidebarCSS.innerContainer}>
                <SidebarProfilePicture />
                {/* Name and Title */}
                <div className={SidebarCSS.title}>
                    <h1 style = {{fontSize : "28px"}}><span>&#60;</span><b> Vaibhav Mougha </b><span>/ &#62;</span></h1>
                    <p style = {{fontSize : "26px"}}>Full-Stack Web Developer</p>
                </div>
                {/* Buttons Container */}
                <SidebarButtons />
            </div>
        </div>
    </>
  )
}
