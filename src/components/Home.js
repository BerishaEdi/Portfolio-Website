import React from 'react'
import portrait from "../images/Download.png"

const Home = () => {
  return (
        <div className='home'>
            <h1 className='titel'> Eduard <br /> Berisha</h1>
            <img src={portrait} alt="portrait" className='bild '></img>
        </div>
  )
}

export default Home