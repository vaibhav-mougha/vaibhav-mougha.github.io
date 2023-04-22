// import GitHubCalendar from 'react-github-calendar'
// import styles from "../css/github.module.css";
// export default function GithubCalender(){
//     return   <div className={styles.gitCalender}>
//         <h3>Github Calender</h3>
//     <GitHubCalendar username="nilamkhose2001" className={styles.git} />
//     </div>
// }
import { Box, Text } from "@chakra-ui/react";
import React from "react";
// import { Fade } from "react-awesome-reveal";
import GitHubCalendar from "react-github-calendar";
import styles from "./github.module.css";


const Github = () => {
  return (
    <div className={styles.gitBox}>
      {/* <Fade bottom> */}
      <Text fontSize={{base:"2rem",lg:"4rem"}} className={styles.GitHubCalendarName} textDecorationLine="underline">Github Calender and Stats</Text>
      {/* <Text  color="#4070F4" fontWeight={"bolder"} textAlign={"center"} mb={8} fontSize={{ base: "xl", md: "4xl" }}>Github Calender and Stats</Text> */}
      
      
      
      <Box className={styles.Github} marginBottom="2rem">

        <GitHubCalendar username="vaibhav-mougha" className="calender" />
        
      </Box>


      <div className={styles.Github1}>
        {/* <a
          href="https://github.com/vaibhav-mougha"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=vaibhav-mougha&show_icons=true&count_private=true&theme=algolia"
            height="192px"
          />
        </a> */}

        <Box
          width="90%"
          marginLeft={{ base: "1rem", lg: "4rem" }}
          display="flex"
          justifyContent="space-between"
          mt="3rem"
          // border="1px solid blue"
        >
          <Box
          // border="1px solid black"
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=vaibhav-mougha&"
              alt="vaibhav-mougha"
            />
          </Box>
          <Box
          // border="1px solid red"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=vaibhav-mougha&show_icons=true&locale=en"
              alt="vaibhav-mougha"
            />
          </Box>
        </Box>

        <Box
          // border="1px solid black"
          marginLeft={{ base: "1rem", lg: "21rem" }}
          w={{ base: "45%", lg: "44%" }}
          mt={{ base: "1rem", lg: "3rem" }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=vaibhav-mougha&langs_count=8&show_icons=true&locale=en&layout=compact"
              //  src="https://github-readme-stats.vercel.app/api/top-langs/?username=vaibhav-mougha&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
            alt="vaibhav-mougha"
            width="100%"
          />
        </Box>
      </div>
      {/* </Fade> */}
    </div>
  );
};
export default Github;
