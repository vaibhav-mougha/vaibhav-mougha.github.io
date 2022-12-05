import React from 'react'
import SkillIconsCSS from "./SkillIcons.module.css"
export default function SkillIcons(props) {
  return (
    <>
        <div className={SkillIconsCSS.icons}>
            <img src= {props.img} alt="" />
        </div>
    </>
  )
}
