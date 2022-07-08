import React from 'react'
import skills from "../images/skills.png"



const Skills = () => {
  return (
    <div>
        <p className='titelSkills'>Skills</p>
        <div className='skillsimg'>
          <img src={skills} alt="Skill" className='skillsimg' width="40%"></img>
        </div>
    </div>
    
  )
}

export default Skills