import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div class="navbar">
            <div class="logo">HEMANGI</div>
            <div class="right-content">
                <a href='#'>About</a>
                <a href='#'>Work</a>
                <a href='#'>Services</a>
                <a href='#'>Contact</a>
                <div class="button-content">
                    <div class="icon">
                        <img src={require('./images/Icon.png')}></img>
                    </div>
                    <div class="btn">
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
