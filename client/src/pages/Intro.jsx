import IntroOutline1 from '../assets/imports/outline.png'
import IntroOutline2 from '../assets/imports/outline2.png'
import IntroOutline3 from '../assets/imports/outline3.png'
import React, { useEffect, useState } from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'
import { useOutlineAnim } from '../anim'
import Location from './Location'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import axios from 'axios'

const Intro = () => {

    useOutlineAnim()

    const [isIntro, setIsIntro] = useState(true)

    const [legend, setLegend] = useState('Click to Type')
    const [proceed, setProceed] = useState(false)

    function goNext(e) {
        if (e.key === 'Enter') {
            if (checkInp(e.target.value)) {
                setIsIntro(false)
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

    useGSAP(() => {
        gsap.timeline()
            .from('#intro', { opacity: 0, duration: 1 })
            .from('.intro__outline', { opacity: 0, duration: 2 })
    })

    useEffect(() => {
        let name = localStorage.getItem('name')
        if (name && checkInp(name)) {
            setProceed(true)
        }
    }, [])

    return (
        <section id="intro">
            <div className="intro__outline">
                <img className="outline1" src={IntroOutline1} alt="" />
                <img className="outline2" src={IntroOutline2} alt="" />
                <img className="outline3" src={IntroOutline3} alt="" />
            </div>
            {
                !!isIntro
                    ?
                    <section id="intro">

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
                        <div onClick={() => setIsIntro(false)}>
                            <ProceedButton loc="/introduction" proceed={proceed} />
                        </div>
                    </section>
                    :
                    <Location setIsIntro={setIsIntro} />
            }
        </section>
    )
}

export default Intro
