
import { useNavigate } from 'react-router-dom'
import AnalysisMenuOutline1 from '../assets/imports/outline.png'
import AnalysisMenuOutline2 from '../assets/imports/outline2.png'
import AnalysisMenuOutline3 from '../assets/imports/outline3.png'
import React from 'react'
import BackButton from '../components/ui/BackButton'
import { useOutlineAnim } from '../anim'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const AnalysisMenu = () => {

    useOutlineAnim()

    let inTl
    let navigate = useNavigate()

    useGSAP(() => {
        inTl = gsap.timeline()
        .from('#analysis-menu', { opacity: 0, duration: 0.9 })
        .from('.analysis-menu__panel', { opacity: 0, duration: 1.1 }, '<')
    })

    return (
        <section id="analysis-menu">
            <div className="analysis-menu__subhead section-subhead">
                <div className="analysis-menu__subhead--title">A.I. Analysis</div>
                <div className="analysis-menu__subhead--subtitle">A.I Has estimated the following.<br />Fix estimaded information if needed.</div>
            </div>
            <div className="analysis-menu__panel">
                <img className="outline1" src={AnalysisMenuOutline1} alt="" />
                <img className="outline2" src={AnalysisMenuOutline2} alt="" />
                <img className="outline3" src={AnalysisMenuOutline3} alt="" />
                <div className="analysis-menu__panel--buttons">
                    <div className="analysis-menu__panel--button" onClick={() => navigate('/analysis')}><h4>Demographics</h4></div>
                    <div className="analysis-menu__panel--button"><h4>Cosmetic<br />Concerns</h4></div>
                    <div className="analysis-menu__panel--button"><h4>Skin Type<br />Details</h4></div>
                    <div className="analysis-menu__panel--button"><h4>Weather</h4></div>
                </div>
            </div>

            <BackButton loc='/upload' />

        </section>
    )
}

export default AnalysisMenu
