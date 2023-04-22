import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SkillIconsCSS from "./SkillIcons.module.css";
export default function SkillIcons(props) {
  return (
    <>
      <Box
        className={SkillIconsCSS.icons}
        color="black"
        _hover={{
          background: "#FC766A",
          color: "white",
          border: "3px solid #39B7FF",
        }}
      >
        <a href={props.url} target="_blank">
          <div>
            <Text fontSize="1.2rem" textAlign="center">
              {props.text}
            </Text>
            <div>
              {" "}
              <img src={props.img} alt="" />
            </div>
          </div>
        </a>
      </Box>
    </>
  );
}
