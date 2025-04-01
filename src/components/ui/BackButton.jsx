
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackButtonImg from '../../assets/imports/button.png'
import BackButtonImgHover from '../../assets/imports/button-hover.png'
import BackButtonImgInner from '../../assets/imports/button-inner.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const BackButton = ({ loc }) => {

    const navigate = useNavigate()
    const tlRef = React.useRef(null)


    useGSAP(() => {
        tlRef.current = gsap.timeline({ paused: true })

        tlRef.current
            .to('.gsap-back-inner', { opacity: 1, scale: 0.8, duration: 0.2, ease: 'power1.inOut' })
            .to('.gsap-back-outline', { scale: 0.8, duration: 0.2, ease: 'power1.inOut' }, '<')
            .to('.back__imgs', { marginRight: '50px', duration: 0.2, ease: 'power1.inOut' }, '<')
    })

    const anim = () => {
        tlRef.current.play()
    }

    const unAnim = () => {
        tlRef.current.reverse()
    }

    return (
        <div
            className="back"
            onClick={() => navigate(loc)}
        >
            <div
                onMouseOver={anim}
                onMouseOut={unAnim}
                className="back__imgs">
                <img
                    style={{ scale: 0.75, opacity: 0 }}
                    className="gsap-back-inner"
                    src={BackButtonImgHover}
                    alt=""
                />
                <img
                    className="gsap-back-outline"
                    style={{ scale: 0.6 }}
                    src={BackButtonImg}
                    alt=""
                />
                <img
                    style={{ rotate: '180deg', translate: '-1.5px' }}
                    src={BackButtonImgInner}
                    alt=""
                />
            </div>
            Back
        </div>
    )
}

export default BackButton
