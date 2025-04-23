import { useNavigate } from 'react-router-dom'
import LandingButton from '../assets/imports/button.png'
import LandingButtonInner from '../assets/imports/button-inner.png'
import LandingButtonHover from '../assets/imports/button-hover.png'
import LandingOutline from '../assets/imports/landing-outline.png'
import LandingOutline2 from '../assets/imports/outline2.png'
import LandingOutline3 from '../assets/imports/outline3.png'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Landing = () => {

    let navigate = useNavigate()

    let tl
    const tlRef = React.useRef(null)

    useGSAP(() => {
        tlRef.current = gsap.timeline({ paused: true })

        tlRef.current
            .to('.gsap-test-inner', { opacity: 1, scale: 0.8, duration: 0.2, ease: 'power1.inOut' })
            .to('.gsap-test-outline', { scale: 0.8, duration: 0.2, ease: 'power1.inOut' }, '<')
            .to('.landing__test--imgs', { marginLeft: '60px', duration: 0.2, ease: 'power1.inOut' }, '<')
    })

    const buttonAnim = () => {
        tlRef.current.play()
        tl.current.play()
    }

    const buttonUnAnim = () => {
        tlRef.current.reverse()
        tl.current.reverse()
    }

    useGSAP(() => {
        if (window.matchMedia('(max-width: 500px').matches) {
            tl = gsap.timeline()
            tl.current = gsap.timeline({ paused: true })
        } else if (window.matchMedia('(max-width: 800px').matches) {
            tl = gsap.timeline()
            tl.current = gsap.timeline({ paused: true })
                .to('.landing__soph', { x: (window.innerWidth / -2) + 210, duration: 0.5, ease: 'power1.inOut' })
                .to('.landing__skin', { x: (window.innerWidth / -2) + 135, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to('.landing__discover', { x: -300, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to('.landing__test--outline2', { x: -40, opacity: 1, duration: 0.5 }, '<')
                .to('.landing__test--outline3', { x: -80, opacity: 1, duration: 0.5 }, '<')
        } else if (window.matchMedia('(max-width: 1150px').matches) {
            tl = gsap.timeline()
            tl.current = gsap.timeline({ paused: true })
                .to('.landing__soph', { x: (window.innerWidth / -2) + 240, duration: 0.5, ease: 'power1.inOut' })
                .to('.landing__skin', { x: (window.innerWidth / -2) + 150, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to('.landing__discover', { x: -300, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to('.landing__test--outline2', { x: -40, opacity: 1, duration: 0.5 }, '<')
                .to('.landing__test--outline3', { x: -80, opacity: 1, duration: 0.5 }, '<')
        } else if (window.matchMedia('(max-width: 10000px').matches) {
            tl = gsap.timeline()
            tl.current = gsap.timeline({ paused: true })
                .to('.landing__soph', { x: (window.innerWidth / -2) + 370, duration: 0.5, ease: 'power1.inOut' })
                .to('.landing__skin', { x: (window.innerWidth / -2) + 230, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to('.landing__discover', { x: -300, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to('.landing__test--outline2', { x: -40, opacity: 1, duration: 0.5 }, '<')
                .to('.landing__test--outline3', { x: -80, opacity: 1, duration: 0.5 }, '<')
        }
    })

    useGSAP(() => {
        gsap.timeline()
            .from('.landing__soph', { y: 70, opacity: 0, duration: 0.5 })
            .from('.landing__skin', { y: 70, opacity: 0, duration: 0.5 }, '<+0.2')
            .from('.landing__discover--option', { opacity: 0, duration: 1 })
            .from('.landing__discover--outline', { opacity: 0, duration: 1 }, '<')
            .from('.landing__test--option', { opacity: 0, duration: 1 }, '<')
            .from('.landing__test--outline', { opacity: 0, duration: 1 }, '<')
            .from('.landing__fine', { opacity: 0 })
    })

    return (
        <section id="home">
            <div className="landing__discover">
                <img src={LandingOutline} alt="" className="landing__discover--outline" />
                <h4
                    className="landing__discover--option">
                    <div
                        className="landing__discover--imgs"
                    >
                        <img
                            src={LandingButton}
                            style={{ scale: 0.6 }}
                            alt="Discover" />
                        <img
                            src={LandingButtonHover}
                            style={{ scale: 0.75, opacity: 0 }}
                            alt="Discover" />
                        <img
                            src={LandingButtonInner}
                            style={{ translate: '-1.5px', rotate: '180deg' }}
                            alt="Discover" />
                    </div>
                    discover a.i
                </h4>
            </div>
            <div className="landing__title">
                <h1 className="landing__soph">Sophisticated</h1>
                <h1 className="landing__skin">skincare</h1>
            </div>
            <div className="landing__test">
                <img src={LandingOutline} alt="" className="landing__test--outline" />
                <img src={LandingOutline2} alt="" className="landing__test--outlines landing__test--outline2" />
                <img src={LandingOutline3} alt="" className="landing__test--outlines landing__test--outline3" />
                <h4
                    className="landing__test--option">
                    take test
                    <div
                        onMouseOver={buttonAnim}
                        onMouseOut={buttonUnAnim}
                        onClick={() => navigate('/introduction')}
                        className="landing__test--imgs"
                    >
                        <img
                            className="gsap-test-outline"
                            src={LandingButton}
                            style={{ scale: 0.6 }}
                            alt="Test" />
                        <img
                            className="gsap-test-inner"
                            src={LandingButtonHover}
                            style={{ scale: 0.75, opacity: 0 }}
                            alt="Test" />
                        <img
                            src={LandingButtonInner}
                            style={{ translate: '.5px' }}
                            alt="Test" />
                    </div>
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