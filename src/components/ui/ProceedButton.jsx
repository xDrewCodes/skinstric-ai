
import React from 'react'
import BackButtonImgHover from '../../assets/imports/button-hover.png'
import BackButtonImgInner from '../../assets/imports/button-inner.png'
import BackButtonImg from '../../assets/imports/button.png'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ProceedButton = ({ loc, proceed }) => {

    let navigate = useNavigate()
    const tlRef = React.useRef(null)

    useGSAP(() => {
        tlRef.current = gsap.timeline({ paused: true })

        tlRef.current
            .to('.gsap-proceed-inner', { opacity: 1, scale: 0.8, duration: 0.2, ease: 'power1.inOut' })
            .to('.gsap-proceed-outline', { scale: 0.8, duration: 0.2, ease: 'power1.inOut' }, '<')
            .to('.proceed__imgs', { marginLeft: '50px', duration: 0.2, ease: 'power1.inOut' }, '<')
    })

    const anim = () => {
        tlRef.current.play()
    }

    const unAnim = () => {
        tlRef.current.reverse()
    }

    return (
        <>
            {
                !!proceed &&
                <div
                    className="proceed"
                    onClick={() => navigate(loc)}
                >
                    Proceed
                    <div
                        onMouseOver={anim}
                        onMouseOut={unAnim}
                        className="proceed__imgs">
                        <img
                            style={{ scale: 0.75, opacity: 0 }}
                            className="gsap-proceed-inner"
                            src={BackButtonImgHover}
                            alt=""
                        />
                        <img
                            className="gsap-proceed-outline"
                            style={{ scale: 0.6 }}
                            src={BackButtonImg}
                            alt=""
                        />
                        <img
                            style={{ translate: '.5px' }}
                            src={BackButtonImgInner}
                            alt=""
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default ProceedButton
