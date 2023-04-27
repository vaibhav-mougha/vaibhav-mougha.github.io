import React from 'react'
import Content from '../Content/Content';
import Navbar from '../Navbar/Navbar';
import MainCSS from './Main.module.css';

export default function Main() {
  return (
    <>
       <div className={MainCSS.container}>
        
            <Navbar />
            <Content />

       </div> 
    </>
  )
}
