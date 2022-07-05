import React from 'react'
import skillsIcons from "../images/icons.png"
const Skills = () => {
  return (
    <div>
        <h3 className='titelSkills'>Skills</h3>
        <div className='skills'>
            <img src={skillsIcons} alt="skills" className='skillicons'></img>
        </div>
    </div>
    
  )
}

export default Skills