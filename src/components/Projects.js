import React from 'react'
import calculatorImg from "../images/calculator.png"
import toDoImg from "../images/ToDo.png"
import botImg from "../images/bot.png"

const Projects = () => {
  return (
    <div className='projects'>
        <h1 className='titelProjects'>Projekte</h1>
        <div class="grid">

          <div class="div1"> 
            <a className='Link' href="https://portfolio.bbbaden.ch/view/view.php?t=SJGn4xsRp0Zj7XFD316b">React-Native <br></br> Taschenrechner</a>
            <div className='innergrid'>
              <div>
                <a className='githubLink' href="https://github.com/BerishaEdi/ReactNative-Taschenrechner">Github</a>
              </div>
              <div>|</div>
              <div>
                <a className='portfolioLink' href="https://portfolio.bbbaden.ch/view/view.php?t=SJGn4xsRp0Zj7XFD316b">Portfolio</a>
              </div>
            </div>
            <img src={calculatorImg} alt="CalculatorIMG" width="50%" height="auto" className='calculatorimg'></img>
          </div>

          <div class="div2"> 
            <a className='Link' href="https://github.com/BerishaEdi/React-Native-TodoApp">React Native, Firebase <br></br> ToDo App</a>
            <div className='innergrid'>
              <div>
                <a className='githubLink' href="https://github.com/BerishaEdi/React-Native-TodoApp">Github</a>
              </div>
              <div>|</div>
              <div>
                <a className='portfolioLink' href="https://github.com/BerishaEdi/React-Native-TodoApp">Portfolio</a>
              </div>
            </div>
            <img src={toDoImg} alt="platformerIMG" width="50%" height="auto" className='platformerimg'></img>
          </div>

          <div class="div3">  
            <a className='Link' href="https://portfolio.bbbaden.ch/view/view.php?t=jpOZAo8DVHMhYFaSygEv">Discord <br></br> Bot</a>
            <div className='innergrid'>
              <div>
                <a className='githubLink' href="https://github.com/BerishaEdi/Discord-Bot">Github</a>
              </div>
              <div>|</div>
              <div>
                <a className='portfolioLink' href="https://portfolio.bbbaden.ch/view/view.php?t=jpOZAo8DVHMhYFaSygEv">Portfolio</a>
              </div>
            </div>
            <img src={botImg} alt="botIMG" width="90%" height="auto" className='botimg'></img>
          </div>

        </div>
    </div>
  )
}

export default Projects