import React from 'react'
import BoxCSS from "./Box.module.css"

export default function Box({count, title}) {
  return (
    <>
        <div className={BoxCSS.box}>
                <h1>{count}+</h1>
                <p>{title}</p>
        </div>
    </>
  )
}
