import React from 'react'
import HeadingCSS from "./Heading.module.css";
export default function Heading(props) {
  return (
    <>
        <div className={HeadingCSS.heading}>
            <h1>{props.before} <span>{props.heading}</span> {props.after}</h1>
        </div>
    </>
  )
}
