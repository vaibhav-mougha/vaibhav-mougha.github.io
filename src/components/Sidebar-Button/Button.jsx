import React from "react";
import ButtonCSS from "./Button.module.css";

export default function Button(props) {
  const styles = {
    width: props.width || "100px",
    color: props.color,
    padding: props.padding || "10px",
    backgroundColor: props.background,
    borderRadius: props.radius || "0px",
    border: props.border || "none",
    fontSize: props.size || "16px",
    cursor: "pointer",
    marginBottom: props.mb || "0px",
  };

  return (
    <>
      <a href={props.url}>
        <button
          onClick={() => {
            props.click();
          }}
          className={ButtonCSS.button}
          style={styles}
        >
          {props.title}
        </button>
      </a>
    </>
  );
}
