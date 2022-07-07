import React from 'react'
import calculatorImg from "../images/calculator.png"
import platformerImg from "../images/platformer.png"
import botImg from "../images/bot.png"


const Projects = () => {
  return (
    <div>
        <h1 className='titelProjects'>Projekte</h1>
        <div class="grid">

          <div class="div1"> <a className='calculatorLink' href="https://portfolio.bbbaden.ch/user/e-berisha-inf20/la-1305-react-nativ-taschenrechner">React-Native <br></br> Taschenrechner</a>
            <img src={calculatorImg} alt="CalculatorIMG" width="50%" height="auto" className='calculatorimg'></img>
          </div>

          <div class="div2"> 
            <a className='calculatorLink' href="https://portfolio.bbbaden.ch/user/e-berisha-inf20/la-1305-react-nativ-taschenrechner">Java Platformer</a>
            <img src={platformerImg} alt="platformerIMG" width="91%" height="auto" className='platformerimg'></img>
          </div>

          <div class="div3">  
            <a className='calculatorLink' href="https://portfolio.bbbaden.ch/user/e-berisha-inf20/la-1305-react-nativ-taschenrechner">Discord Bot</a>
            <img src={botImg} alt="botIMG" width="100%" height="auto" className='botimg'></img>
          </div>

        </div>
    </div>
  )
}

export default Projects