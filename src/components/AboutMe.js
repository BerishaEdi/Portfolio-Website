import React from 'react'
import waves from "../images/background_waves.png"
import timeline from "../images/timeline.png"
import flipedwaves from "../images/flipedWaves.png"

const AboutMe = () => {
  return (
        <div className='aboutMe'>
            <div className='titel'>
              <h2 className='abouteMeTitel'>About Me</h2>
            </div>
            <div className='image'>
              <img src={waves} alt="background" className='waves'></img>
            </div>
            <div className='timeline'>
              <h2 className='txtAusbildung'>Lebenslauf</h2>
              <img src={timeline} alt="timeline" className='timeline'></img>
            </div>
            <div className='design'>
              <img src={flipedwaves} alt="waves" className='flipedWaves'></img>  
            </div>
        </div>
        
        



  )
}

export default AboutMe