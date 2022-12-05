// import GitHubCalendar from 'react-github-calendar'
// import styles from "../css/github.module.css";
// export default function GithubCalender(){
//     return   <div className={styles.gitCalender}>
//         <h3>Github Calender</h3>
//     <GitHubCalendar username="nilamkhose2001" className={styles.git} />
//     </div>
// }
import { Text } from "@chakra-ui/react";
import React from "react";
// import { Fade } from "react-awesome-reveal";
import GitHubCalendar from "react-github-calendar";
import styles from "./github.module.css";
 const Github = () => {
  return (
    <div className={styles.gitBox} >
      {/* <Fade bottom> */}
      <h1 className={styles.GitHubCalendarName}>Github Calender and Stats</h1>
        {/* <Text  color="#4070F4" fontWeight={"bolder"} textAlign={"center"} mb={8} fontSize={{ base: "xl", md: "4xl" }}>Github Calender and Stats</Text> */}
      <div className={styles.Github}>
        <GitHubCalendar username="vaibhav-mougha" className="calender" />
      </div>
      <div className={styles.Github1}>
        <a href="https://github.com/vaibhav-mougha" rel="noreferrer" target="_blank">
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=vaibhav-mougha&show_icons=true&count_private=true&theme=algolia"
            height="192px"
          />
        </a>
      </div>
      {/* </Fade> */}
    </div>
  );
};
export default Github;