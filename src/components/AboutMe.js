import React from 'react'
import waves from "../images/background_waves.png"

const AboutMe = () => {
  return (
        <div className='aboutMe'>
            <div className='titel'>
              <h2 className='abouteMeTitel'>About Me</h2>
            </div>
        
            <div>
              <img src={waves} alt="background" className='waves'></img>
            </div>
        </div>
        
        



  )
}

export default AboutMe