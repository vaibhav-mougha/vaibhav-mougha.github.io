import React from 'react'
import CarouselCSS from "./Carousel.module.css"
import Cards from '../Cards/Cards';

export default function Carousel() {
  let projects = [
    {
      poster : "./images/espnCricinfo.png",
      name : "espncricinfo.com Clone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis veniam adipisci animi sequi repellat dolore aperiam itaque facere distinctio.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/174/174854.png", title : "HTML 5"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", title : "CSS 3"},
        {img : "https://cdn.cdnlogo.com/logos/j/69/javascript.svg", title : "JavaScript"},
        {img : "https://avatars.githubusercontent.com/u/2918581?s=280&v=4", title : "Bootstrap"},
      ],
      github : "https://github.com/sbj1198/alive-run-138",
      live : "https://zippy-semolina-2db6e6.netlify.app/"
    },
    {
      poster : "./images/vnetmed.png",
      name : "netmed.com Clone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis veniam adipisci animi sequi repellat dolore aperiam itaque facere distinctio.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/174/174854.png", title : "HTML 5"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", title : "CSS 3"},
        {img : "https://cdn.cdnlogo.com/logos/j/69/javascript.svg", title : "JavaScript"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", title : "React"},
      ],
      github : "https://github.com/vaibhav-mougha/able-harmony-1862",
      live : "https://timely-pothos-6168ff.netlify.app/"
    },
    {
      poster : "./images/naukri.com.png",
      name : "naukri.com Clone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis veniam adipisci animi sequi repellat dolore aperiam itaque facere distinctio.",
      techStack : [
        {img : "https://cdn-icons-png.flaticon.com/512/174/174854.png", title : "HTML 5"},
        {img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", title : "CSS 3"},
        {img : "https://cdn.cdnlogo.com/logos/j/69/javascript.svg", title : "JavaScript"},
      ],
      github : "https://github.com/vaibhav-mougha/questionable-milk-2896",
      live : "https://moonlit-sunburst-285db4.netlify.app/"
    }
  ]
  return (
    <>
     <div className={CarouselCSS.container}>

       {
        projects.map((ele) =>{
          return     <Cards {...ele}/>
        })
       }
     

     </div>
    </>
  )
}
