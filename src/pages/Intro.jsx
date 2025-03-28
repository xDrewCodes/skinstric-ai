
import { useNavigate } from 'react-router-dom'
import BackButton from '../assets/imports/button.png'
import IntroOutline1 from '../assets/imports/outline.png'
import IntroOutline2 from '../assets/imports/outline2.png'
import IntroOutline3 from '../assets/imports/outline3.png'
import React from 'react'

const Intro = () => {

    let navigate = useNavigate()

    return (
        <section id="intro">
            <div className="intro__outline">
                <img src={IntroOutline1} alt="" />
                <img src={IntroOutline2} alt="" />
                <img src={IntroOutline3} alt="" />
            </div>
            <div className="section-subhead">to start analysis</div>
            <div className="intro__name">
                <legend>click to type</legend>
                <input type="text" placeholder="Introduce Yourself" />
            </div>
            <div className="intro__back" onClick={() => navigate('/')}>
                <img src={BackButton} alt="Go Back" />
                Back
            </div>
        </section>
    )
}

export default Intro
