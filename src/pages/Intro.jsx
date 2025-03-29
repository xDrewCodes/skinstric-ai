import IntroOutline1 from '../assets/imports/outline.png'
import IntroOutline2 from '../assets/imports/outline2.png'
import IntroOutline3 from '../assets/imports/outline3.png'
import React, { useEffect, useState } from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'
import { useNavigate } from 'react-router-dom'

const Intro = () => {

    let navigate = useNavigate()

    const [legend, setLegend] = useState('Click to Type')
    const [proceed, setProceed] = useState(false)

    function goNext(e) {
        if (e.key === 'Enter') {
            if (checkInp(e.target.value)) {
                navigate('/location')
            } else {
                console.log('Invalid Name')
            }
        }
    }

    function checkInp(name) {
        let reg = /^[A-Za-z\s]+$/
        return reg.test(name)
    }

    function saveName(name) {
        if (checkInp(name)) {
            localStorage.setItem('name', name)
            setProceed(true)
        } else {
            setProceed(false)
        }
    }

    function fetchName() {
        return localStorage.getItem('name')
    }

    useEffect(() => {
        let name = localStorage.getItem('name')
        if (name && checkInp(name)) {
            setProceed(true)
        }
    }, [])

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
