import React from 'react'
import './skills.css'

export default function Skills() {
    return (
        <div class="skills-main">
            <div class="skills-intro">
                <h3>Skills</h3>
                <h2>
                    The skills, tools and<br></br> technologies I am really good at:
                </h2>
            </div>
            <div class="skills-logo">
                <div class="upper">
                    <div class="html">
                        {/* <img src={require('./images/html.png')} alt=''></img> */}
                        <i class="fa-brands fa-html5"></i>
                        <div class="sikll-name"><p>HTML</p></div>
                    </div>
                    <div class="css">
                        {/* <img src={require('./images/css.png')} alt=''></img> */}
                        <i class="fa-brands fa-css3-alt"></i>
                        <div class="sikll-name"><p>CSS</p></div>
                    </div>
                    <div class="js">
                        {/* <img src={require('./images/js.png')} alt=''></img> */}
                        <i class="fa-brands fa-js"></i>
                        <div class="sikll-name"><p>JAVASCRIPT</p></div>
                    </div>
                    <div class="bootstrap">
                        {/* <img src={require('./images/bootstrap.png')} alt=''></img> */}
                        <i class="fa-brands fa-bootstrap"></i>
                        <div class="sikll-name"><p>BOOTSTRAP</p></div>
                    </div>
                </div>
                <div class="down">
                    <div class="react">
                        {/* <img src={require('./images/react.png')} alt=''></img> */}
                        <i class="fa-brands fa-react"></i>
                        <div class="sikll-name"><p>REACT</p></div>
                    </div>
                    <div class="figma">
                        <i class="fa-brands fa-figma"></i>
                        {/* <img src={require('./images/Ellipse 2164.png')} alt=''></img> */}
                        <div class="sikll-name"><p>FIGMA</p></div>
                    </div>
                    <div class="github">
                        <i class="fa-brands fa-square-github"></i>
                        <div class="sikll-name"><p>GITHUB</p></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
