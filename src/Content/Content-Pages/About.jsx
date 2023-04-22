import { Text } from "@chakra-ui/react";
import React from "react";
import Box from "../../components/aboupage-project-description/Box";
import Heading from "../../components/Heading/Heading";
import AboutCSS from "./CSS/About.module.css";

export default function About() {
  const handleClick = () => {
    window.open(
      "/Vaibhav-Mougha-Resume.pdf"
    );
  };

  return (
    <>
      <div className={AboutCSS.container} id="about">
        <div className={AboutCSS.aboutPage}>
          <Heading fontSize="3rem" heading="About" after="Me" />

          <div className={AboutCSS.content}>
            <div className={AboutCSS.profileDes}>
              <h1 className={AboutCSS.title}>
                Hi, I'm <span>Vaibhav Mougha</span>
              </h1>
              <Text fontSize="1.2rem" className={AboutCSS.aboutMe}>
                An aspiring Full-Stack Web Developer with a strong interest in
                projects requiring conceptual and analytical thinking.
                Self-motivated and hardworking fresher seeking an opportunity to
                work in a challenging environment to prove my skills and utilize
                my knowledge & intelligence in the organisation's growth.
              </Text>
              <a
                target="_blank"
                href="Vaibhav-Mougha-Resume.pdf"
                download="Vaibhav-Mougha-Resume.pdf"
                onClick={handleClick}
              >
                <button className={AboutCSS.cv}>Download CV</button>
              </a>
            </div>
            <div className={AboutCSS.projectDes}>
              <a href="#project">
                {" "}
                <Box count="5" title="Total Project" />
              </a>
              <a href="#project">
                {" "}
                <Box count="3" title="Group Project" />
              </a>
              <a href="#project">
                {" "}
                <Box count="2" title="Individual Project" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
