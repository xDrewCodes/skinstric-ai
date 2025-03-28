
import { useNavigate } from 'react-router-dom'
import AnalysisMenuOutline1 from '../assets/imports/outline.png'
import AnalysisMenuOutline2 from '../assets/imports/outline2.png'
import AnalysisMenuOutline3 from '../assets/imports/outline3.png'
import React from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'

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
