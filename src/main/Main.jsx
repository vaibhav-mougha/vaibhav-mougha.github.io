import React from 'react'
import Content from '../Content/Content';
import Sidebar from '../SideBar/Sidebar';
import MainCSS from './Main.module.css';

export default function Main() {
  return (
    <>
       <div className={MainCSS.container}>
        
            <Sidebar />
            <Content />

       </div> 
    </>
  )
}
