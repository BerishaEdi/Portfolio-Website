import React from 'react'

const Kontakt = () => {
    return (
        <div className='kontakt'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
                version="1.1"
                viewBox="0 0 200 50"
            >
                <path fill="#32BBC4" d="M0 0H200V50H0z"></path>
                <path
                    fill="#27ba77"
                    d="M0 17l4.8.7c4.9.6 14.5 2 24 1s18.9-4.4 28.4-4.4 19.1 3.4 28.6 4.2c9.5.8 18.9-.8 28.4-3s19.1-4.8 28.6-4.2c9.5.7 18.9 4.7 28.4 5.4 9.5.6 19.1-2 24-3.4L200 12v39H0z"
                ></path>
                <path
                    fill="#44cd6c"
                    d="M0 22l4.8 1c4.9 1 14.5 3 24 2.8 9.5-.1 18.9-2.5 28.4-4.5s19.1-3.6 28.6-2.3c9.5 1.3 18.9 5.7 28.4 7.3 9.5 1.7 19.1.7 28.6-1.3s18.9-5 28.4-5.2c9.5-.1 19.1 2.5 24 3.9L200 25v26H0z"
                ></path>
                <path
                    fill="#67df5a"
                    d="M0 23h4.8c4.9 0 14.5 0 24 .3 9.5.4 18.9 1 28.4 2.2 9.5 1.2 19.1 2.8 28.6 3.3s18.9-.1 28.4-1.3 19.1-2.8 28.6-3.7c9.5-.8 18.9-.8 28.4 0 9.5.9 19.1 2.5 24 3.4l4.8.8v23H0z"
                ></path>
                <path
                    fill="#8ef040"
                    d="M0 38l4.8-1.2c4.9-1.1 14.5-3.5 24-4s18.9.9 28.4 1.9c9.5 1 19.1 1.6 28.6 1.3 9.5-.3 18.9-1.7 28.4-1.5 9.5.2 19.1 1.8 28.6 1.3s18.9-3.1 28.4-3.3c9.5-.2 19.1 2.2 24 3.3L200 37v14H0z"
                ></path>
                <path
                    fill="#b9ff00"
                    d="M0 45l4.8-.7c4.9-.6 14.5-2 24-2.1 9.5-.2 18.9.8 28.4.5 9.5-.4 19.1-2 28.6-2.9 9.5-.8 18.9-.8 28.4-1 9.5-.1 19.1-.5 28.6.2s18.9 2.3 28.4 2.2c9.5-.2 19.1-2.2 24-3.2l4.8-1v14H0z"
                ></path>
            </svg>
                <h1 className="titelk">Socials</h1>
            <div className="socialsGrid">
                <div>
                    <a href="mailto:eduard.berisha@stud.altekanti.ch" className="Link" target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className='svgSocials'
                            width="25%"
                            height="auto"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/eduard-berisha-82b47423b/" className="Link" target="_blank" rel="noreferrer">
                        <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            className='svgSocials'
                            width="25%"
                            height="auto"
                        >
                            {" "}
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/BerishaEdi" className="Link" target="_blank" rel="noreferrer">
                        <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            className='svgSocials'
                            width="25%"
                            height="auto"

                        >
                            {" "}
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                        </svg>
                    </a>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Kontakt