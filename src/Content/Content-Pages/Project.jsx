import React from 'react'
import ProjectCSS from "./CSS/Project.module.css";
import Heading from '../../components/Heading/Heading'
import ProjectSection from '../../components/Project-section/ProjectSection';

export default function Project() {
  return (
    <>
      <div className={ProjectCSS.container} id="project">
          <div className={ProjectCSS.projectPage}>
          <Heading  heading = "Project" before = "My"/>
            <ProjectSection />
          </div>
      </div>
    </>
  )
}
