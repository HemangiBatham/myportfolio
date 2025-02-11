import React from 'react'
import './myself.css'

export default function Myself() {
    return (
        <>
            <div class="main">
                <div class="intro">
                    <h1><span class="one">I’m</span> Hemangi </h1>
                    <h3>Crafting Engaging Web Experiences</h3>
                    <p>Bringing creativity and functionality together to build dynamic,<br></br> responsive, and user-friendly web interfaces.</p>
                </div>
                <div class="avtar">
                    <img src={require('./images/me-img.jfif')} alt=''></img>
                </div>
            </div>
            <div class="border"></div>
        </>
    )
}
