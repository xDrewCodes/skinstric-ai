import { useNavigate } from 'react-router-dom'
import LandingButton from '../../assets/imports/button.png'
import LandingOutline from '../../assets/imports/landing-outline.png'
import React, { useEffect, useRef } from 'react'
import { useTextSlide } from '../../anim'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Landing = () => {
    let navigate = useNavigate()

    let mainTitle = useRef(null)

    let tl

    useGSAP(() => {
        tl = gsap.timeline()
        tl.current = gsap.timeline({ paused: true})
        .to('.landing__soph', { x: ( window.innerWidth / -2 ) + 370, duration: 0.5, ease: 'power1.inOut' })
        .to('.landing__skin', { x: ( window.innerWidth / -2 ) + 230, duration: 0.5, ease: 'power1.inOut' }, '<')
        .to('.landing__discover', { x: -300, duration: 0.5, ease: 'power1.inOut' }, '<')
    })

    const textSlide = () => {
        tl.current.play()
    }

    const fixSlide = () => {
        tl.current.reverse()
    }

    return (
        <section id="home">
            <div className="landing__discover">
                <img src={LandingOutline} alt="" className="landing__discover--outline" />
                <h4 className="landing__discover--option">
                    <img src={LandingButton} alt="Discover" />
                    discover a.i.
                </h4>
            </div>
            <div className="landing__title">
                <h1 ref={mainTitle} className="landing__soph">Sophisticated</h1>
                <h1 className="landing__skin">skincare</h1>
            </div>
            <div className="landing__test">
                <img src={LandingOutline} alt="" className="landing__test--outline" />
                <h4
                    onMouseOver={textSlide}
                    onMouseOut={fixSlide}
                    className="landing__test--option">
                    take test
                    <img src={LandingButton} alt="Test" onClick={() => navigate('/introduction')} />
                </h4>
            </div>
            <div className="landing__fine">
                Skinstric developed an A.I. that creates
                a highly-personalised routine tailored to
                what your skin needs.
            </div>
        </section>
    )
}

export default Landing