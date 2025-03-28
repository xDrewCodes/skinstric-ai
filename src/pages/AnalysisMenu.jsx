
import { useNavigate } from 'react-router-dom'
import BackButton from '../assets/imports/button.png'
import AnalysisMenuOutline1 from '../assets/imports/outline.png'
import AnalysisMenuOutline2 from '../assets/imports/outline2.png'
import AnalysisMenuOutline3 from '../assets/imports/outline3.png'
import React from 'react'

const AnalysisMenu = () => {

    let navigate = useNavigate()

    return (
        <section id="analysis-menu">
            <div className="analysis-menu__subhead section-subhead">
                <div className="analysis-menu__subhead--title">A.I. Analysis</div>
                <div className="analysis-menu__subhead--subtitle">A.I Has estimated the following.<br />Fix estimaded information if needed.</div>
            </div>
            <div className="analysis-menu__panel">
                <img src={AnalysisMenuOutline1} alt="" />
                <img src={AnalysisMenuOutline2} alt="" />
                <img src={AnalysisMenuOutline3} alt="" />
                <div className="analysis-menu__panel--buttons">
                    <div className="analysis-menu__panel--button"><h4>Demographics</h4></div>
                    <div className="analysis-menu__panel--button"><h4>Cosmetic<br />Concerns</h4></div>
                    <div className="analysis-menu__panel--button"><h4>Skin Type<br />Details</h4></div>
                    <div className="analysis-menu__panel--button"><h4>Weather</h4></div>
                </div>
            </div>
            <div className="back" onClick={() => navigate('/upload')}>
                <img src={BackButton} alt="" />
                Back
            </div>
            <div className="analysis-menu__summary">
                Summary
                <img src={BackButton} alt="" />
            </div>
        </section>
    )
}

export default AnalysisMenu
