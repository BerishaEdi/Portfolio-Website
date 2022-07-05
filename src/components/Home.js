import React from 'react'
import portrait from "../images/downlaod.png"

const Home = () => {
  return (
        <div className='home'>
            <h1 className='titel'> Eduard <br /> Berisha</h1>
            <img src={portrait} alt="portrait" className='bild '></img>
        </div>
  )
}

export default Home