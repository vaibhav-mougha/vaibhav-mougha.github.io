import React, { useContext } from "react";
import Button from "../components/Sidebar-Button/Button";
import SidebarButtonsCSS from "./SidebarButtons.module.css";
import { FontentAPI } from "../ContextApp/Fontent";

export default function SidebarButtons() {
  let { removeSideBarClick } = useContext(FontentAPI);
  const handleClick = () => {
    window.open(
      "/Vaibhav-Mougha-Resume.pdf"
    );
  };


  return (
    <div className={SidebarButtonsCSS.container}>
      <Button
        width="100%"
        title="Home"
        radius="20px"
        mb="10px"
        size="18px"
        padding="8px"
        url="#home"
        click={removeSideBarClick}
      />
      <Button
        width="100%"
        title="About"
        radius="20px"
        mb="10px"
        size="18px"
        padding="8px"
        url="#about"
        click={removeSideBarClick}
      />
      <Button
        width="100%"
        title="Skills"
        radius="20px"
        mb="10px"
        size="18px"
        padding="8px"
        url="#skills"
        click={removeSideBarClick}
      />
      <Button
        width="100%"
        title="Project"
        radius="20px"
        mb="10px"
        size="18px"
        padding="8px"
        url="#project"
        click={removeSideBarClick}
      />
      
      <a
        target="_blank"
        href="Vaibhav-Mougha-Resume.pdf"
        download="Vaibhav-Mougha-Resume.pdf"
        onClick={handleClick}
      >
        <Button
        width="100%"
        title="Resume"
        radius="20px"
        mb="10px"
        size="18px"
        padding="8px"
        // url="#about"
        click={removeSideBarClick}
      />
      </a>

      <Button
        width="100%"
        title="Contact"
        radius="20px"
        mb="10px"
        size="18px"
        padding="8px"
        url="#contact"
        click={removeSideBarClick}
      />
    </div>
  );
}
