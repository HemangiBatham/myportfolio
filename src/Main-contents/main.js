import React from 'react'
import Navbar from './navbar'
import './main.css'
import Myself from './myself'
import Aboutme from './aboutme'
import Skills from './skills'
import Education from './education'
import Work from './work'
import Footer from './footer'

export default function Main() {
    return (
        <>
            <div class="bg">
                <Navbar />
                <Myself />
                <Aboutme />
                <Skills />
                <Education />
                <Work />
                <Footer />
            </div>
        </>
    )
}
