import React from 'react'
import timeline from "../images/timeline.png"
import flipedwaves from "../images/flipedWaves.png"

const AboutMe = () => {
  return (
        <div className='aboutMe'>
            <div className='titel'>
              <h2 className='abouteMeTitel'>About Me</h2>
            </div>
            <div className='svg'>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 900 300"
    >
      <path fill="#FFF" d="M0 0H900V300H0z"></path>
      <path
        fill="#381b91"
        d="M0 154l21.5-13C43 128 86 102 128.8 91.3c42.9-10.6 85.5-6 128.4-11.8C300 73.7 343 57.3 385.8 58.3c42.9 1 85.5 19.4 128.4 30.4 42.8 11 85.8 14.6 128.6 6C685.7 86 728.3 65 771.2 61.2c42.8-3.9 85.8 9.5 107.3 16.1L900 84v217H0z"
      ></path>
      <path
        fill="#221d73"
        d="M0 99l21.5 4.3c21.5 4.4 64.5 13 107.3 14 42.9 1 85.5-5.6 128.4-1.6 42.8 4 85.8 18.6 128.6 23.6 42.9 5 85.5.4 128.4-4C557 131 600 127 642.8 127c42.9 0 85.5 4 128.4 13.2 42.8 9.1 85.8 23.5 107.3 30.6L900 178v123H0z"
      ></path>
      <path
        fill="#151a54"
        d="M0 182l21.5-2.8c21.5-2.9 64.5-8.5 107.3-8 42.9.5 85.5 7.1 128.4 3 42.8-4.2 85.8-19.2 128.6-24 42.9-4.9 85.5.5 128.4 3.5 42.8 3 85.8 3.6 128.6 12.1 42.9 8.5 85.5 24.9 128.4 24.4 42.8-.5 85.8-17.9 107.3-26.5L900 155v146H0z"
      ></path>
      <path
        fill="#101535"
        d="M0 192l21.5 5.5C43 203 86 214 128.8 219.7c42.9 5.6 85.5 6 128.4-.2 42.8-6.2 85.8-18.8 128.6-18.5 42.9.3 85.5 13.7 128.4 20.3 42.8 6.7 85.8 6.7 128.6-2 42.9-8.6 85.5-26 128.4-31.5 42.8-5.5 85.8.9 107.3 4L900 195v106H0z"
      ></path>
      <path
        fill="#0b0b17"
        d="M0 240l21.5-3c21.5-3 64.5-9 107.3-11 42.9-2 85.5 0 128.4 4.2 42.8 4.1 85.8 10.5 128.6 17.5 42.9 7 85.5 14.6 128.4 12C557 257 600 244 642.8 237c42.9-7 85.5-8 128.4-9 42.8-1 85.8-2 107.3-2.5l21.5-.5v76H0z"
      ></path>
    </svg>
  
            </div>
            <div className='timeline'>
              <h2 className='txtAusbildung'>Lebenslauf</h2>
              <img src={timeline} alt="timeline" className='imgTimeline'></img>
            </div>
            <div className='design'>
              <img src={flipedwaves} alt="waves" className='flipedWaves'></img>  
            </div>
        </div>
        
        



  )
}

export default AboutMe