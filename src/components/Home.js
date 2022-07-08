import React from 'react'
import portraitimg from "../images/portrait1.png"

const Home = () => {
  return (
        <div className='home'>
            <div className='homeGrid'>
              <div>
                <img src={portraitimg} alt="Portrait" className='skillsimg' width="50%"></img>
              </div>
              <div>
                <h1 className='titel'> Eduard <br /> Berisha</h1>
              </div>
            </div>
        </div>
  )
}

export default Home