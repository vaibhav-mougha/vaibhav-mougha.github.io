import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import HomeCSS from "./CSS/Home.module.css";
import Type from "./type";

export default function Home() {
  return (
    <>
      <div className={HomeCSS.container} id="home">
        <div className={HomeCSS.content}>
          <h2 className={HomeCSS.greeting}>
            <Heading fontWeight="bold">HI THERE !</Heading>
          </h2>
          <h1 className={HomeCSS.title}>
            <b>I'M</b>{" "}
            <span>
              <b>
                VAIBHAV MOUGHA <Type />
              </b>
            </span>
          </h1>
          <Text fontSize="1.2rem" color="black">
            A Full-Stack Web Developer trained by Masai School, Bengaluru. I
            have a passion to create useful projects and systems which can
            contribute to everyone's well-being. I go to the full extent in
            execution.
          </Text>
          <a href="#about">
            <button className={HomeCSS.button}>About Me</button>
          </a>
        </div>
      </div>
    </>
  );
}
