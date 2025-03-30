import { useNavigate } from 'react-router-dom'
import LandingButton from '../../assets/imports/button.png'
import LandingOutline from '../../assets/imports/landing-outline.png'
import LandingOutline2 from '../../assets/imports/outline2.png'
import LandingOutline3 from '../../assets/imports/outline3.png'
import React, { useRef } from 'react'
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
        .to('.landing__test--outline2', { x: -40, opacity: 1, duration: 0.5}, '<')
        .to('.landing__test--outline3', { x: -80, opacity: 1, duration: 0.5}, '<')
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
                <img src={LandingOutline2} alt="" className="landing__test--outlines landing__test--outline2" />
                <img src={LandingOutline3} alt="" className="landing__test--outlines landing__test--outline3" />
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