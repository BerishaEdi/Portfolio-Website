import React from 'react'
import portraitimg from "../images/portrait1.png"

const Home = () => {
  return (
        <div className='home'>
            <div className='homeGrid'>
              <div>
                <img src={portraitimg} alt="Portrait" className='portrait' width="40%" height="auto" ></img>
              </div>
              <div>
                <h1 className='titel'> Eduard Berisha</h1>
                <p className='titelAdd'>Informatiker in Ausbildung</p>
              </div>
            </div>
        </div>
  )
}

export default Home