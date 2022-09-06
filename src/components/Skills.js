import React from 'react'
import skills from "../images/skills.png"



const Skills = () => {
  return (
    <div>
      <div className='skillsimg'>
        <p className='titelSkills'>Skills</p>
        <img src={skills} alt="Skill" className='skillsimg' width="40%"></img>
      </div>

      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      version="1.1"
      viewBox="0 0 200 50"
      className='svgSkills'
    >
      <path fill="#381B91" d="M0 0H200V50H0z"></path>
      <path
        fill="#274bbb"
        d="M0 17l4.8.7c4.9.6 14.5 2 24 1s18.9-4.4 28.4-4.4 19.1 3.4 28.6 4.2c9.5.8 18.9-.8 28.4-3s19.1-4.8 28.6-4.2c9.5.7 18.9 4.7 28.4 5.4 9.5.6 19.1-2 24-3.4L200 12v39H0z"
      ></path>
      <path
        fill="#006dcb"
        d="M0 22l4.8 1c4.9 1 14.5 3 24 2.8 9.5-.1 18.9-2.5 28.4-4.5s19.1-3.6 28.6-2.3c9.5 1.3 18.9 5.7 28.4 7.3 9.5 1.7 19.1.7 28.6-1.3s18.9-5 28.4-5.2c9.5-.1 19.1 2.5 24 3.9L200 25v26H0z"
      ></path>
      <path
        fill="#008bd2"
        d="M0 23h4.8c4.9 0 14.5 0 24 .3 9.5.4 18.9 1 28.4 2.2 9.5 1.2 19.1 2.8 28.6 3.3s18.9-.1 28.4-1.3 19.1-2.8 28.6-3.7c9.5-.8 18.9-.8 28.4 0 9.5.9 19.1 2.5 24 3.4l4.8.8v23H0z"
      ></path>
      <path
        fill="#00a5d0"
        d="M0 38l4.8-1.2c4.9-1.1 14.5-3.5 24-4s18.9.9 28.4 1.9c9.5 1 19.1 1.6 28.6 1.3 9.5-.3 18.9-1.7 28.4-1.5 9.5.2 19.1 1.8 28.6 1.3s18.9-3.1 28.4-3.3c9.5-.2 19.1 2.2 24 3.3L200 37v14H0z"
      ></path>
      <path
        fill="#32bbc4"
        d="M0 45l4.8-.7c4.9-.6 14.5-2 24-2.1 9.5-.2 18.9.8 28.4.5 9.5-.4 19.1-2 28.6-2.9 9.5-.8 18.9-.8 28.4-1 9.5-.1 19.1-.5 28.6.2s18.9 2.3 28.4 2.2c9.5-.2 19.1-2.2 24-3.2l4.8-1v14H0z"
      ></path>
    </svg>


    </div>

  )
}

export default Skills