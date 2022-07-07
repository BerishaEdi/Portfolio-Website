import React from 'react'
import calculatorImg from "../images/calculator.png"

const Projects = () => {
  return (
    <div>
        <h1 className='titelProjects'>Projekte</h1>
        <div class="grid">

          <div class="div1"> <a className='calculatorLink' href="https://portfolio.bbbaden.ch/user/e-berisha-inf20/la-1305-react-nativ-taschenrechner">React-Native Taschenrechner</a>
            <img src={calculatorImg} alt="CalculatorIMG" width="400" height="740" className='calculatorimg'></img>
          </div>

          <div class="div2"> 
            <a className='calculatorLink' href="https://portfolio.bbbaden.ch/user/e-berisha-inf20/la-1305-react-nativ-taschenrechner">React-Native Taschenrechner</a>
          </div>

          <div class="div3">  
            <a className='calculatorLink' href="https://portfolio.bbbaden.ch/user/e-berisha-inf20/la-1305-react-nativ-taschenrechner">React-Native Taschenrechner</a>
          </div>

          <div class="div4">  
            <a className='calculatorLink' href="https://portfolio.bbbaden.ch/user/e-berisha-inf20/la-1305-react-nativ-taschenrechner">React-Native Taschenrechner</a>
          </div>

        </div>
    </div>
  )
}

export default Projects