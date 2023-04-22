import React from 'react'
import Carousel from '../project-carousel/Carousel'
import ProjectSectionCSS from "./ProjectSection.module.css"

export default function ProjectSection() {
  return (
    <>
        <div className={ProjectSectionCSS.container}>
          
            <Carousel />
        </div>
    </>
  )
}
