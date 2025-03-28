
import IntroOutline1 from '../assets/imports/outline.png'
import IntroOutline2 from '../assets/imports/outline2.png'
import IntroOutline3 from '../assets/imports/outline3.png'
import React from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'

const Intro = () => {
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

            <BackButton loc="/" />
            <ProceedButton loc="/birthplace" />

        </section>
    )
}

export default Intro
