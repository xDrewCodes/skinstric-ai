
import { useOutlineAnim } from '../anim'
import PrepOutline1 from '../assets/imports/outline.png'
import PrepOutline2 from '../assets/imports/outline2.png'
import PrepOutline3 from '../assets/imports/outline3.png'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Preparing = () => {

    useOutlineAnim()

    useGSAP(() => {
        gsap.timeline()
        .from('#preparing', { y: 20, opacity: 0 })
        .from('.outline1', { opacity: 0, duration: 0.9 })
        .from('.outline2', { opacity: 0, duration: 0.9 }, '<')
        .from('.outline3', { opacity: 0, duration: 0.9 }, '<')
    })

    return (
        <>
            <section id="preparing">
                <img className="outline1" src={PrepOutline1} alt="" />
                <img className="outline2" src={PrepOutline2} alt="" />
                <img className="outline3" src={PrepOutline3} alt="" />
                Preparing Your Analysis...

            </section>

        </>
    )
}

export default Preparing
