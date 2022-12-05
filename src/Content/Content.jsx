import React, { useContext } from 'react'
import About from './Content-Pages/About';
import Contact from './Content-Pages/Contact';
import Home from './Content-Pages/Home';
import Project from './Content-Pages/Project';
import ContentCSS from "./Content.module.css";
import { HamburgerIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FontentAPI } from '../ContextApp/Fontent';
import Skills from './Content-Pages/Skills';
import Github from '../components/github/Github';

export default function Content() {
  let {showSideBarClick} = useContext(FontentAPI);
  return (
    <>
        <div className={ContentCSS.container}>
        <HamburgerIcon  id={ContentCSS.burger} color="white" onClick={() =>{showSideBarClick()}}/>
            <Home />
            <About />
            <Skills />
            <Github />
            <Project />
            <Contact />
        </div>
    </>
  )
}
