
import IntroOutline1 from '../assets/imports/outline.png'
import IntroOutline2 from '../assets/imports/outline2.png'
import IntroOutline3 from '../assets/imports/outline3.png'
import React, { useState } from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'

const Intro = () => {

    const [legend, setLegend] = useState('Click to Type')
    const [proceed, setProceed] = useState(false)

    function goNext(e) {
        if (e.key === 'Enter') {
            setProceed(true)
        }
    }

    function saveName(name) {
        localStorage.setItem('name', name)
    }

    function fetchName() {
        return localStorage.getItem('name')
    }

    return (
        <section id="intro">
            <div className="intro__outline">
                <img src={IntroOutline1} alt="" />
                <img src={IntroOutline2} alt="" />
                <img src={IntroOutline3} alt="" />
            </div>
            <div className="section-subhead">to start analysis</div>
            <div className="intro__name">
                <legend>{legend}</legend>
                <input
                    onKeyDown={(e) => goNext(e)}
                    onFocus={() => setLegend('Introduce Yourself')}
                    onBlur={() => setLegend('Click to Type')}
                    onChange={(e) => saveName(e.target.value)}
                    type="text"
                    placeholder={fetchName() || `Introduce Yourself`} />
            </div>

            <BackButton loc="/" />
            <ProceedButton loc="/location" proceed={proceed} />

        </section>
    )
}

export default Intro
