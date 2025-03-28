
import React from 'react'
import BackButton from '../assets/imports/button.png'
import { useNavigate } from 'react-router-dom'
import AnalysisChoices from '../components/ui/AnalysisChoices'
import AnalysisBreakdown from '../components/ui/AnalysisBreakdown'

const Analysis = () => {

    let navigate = useNavigate()

    return (
        <section id="analysis">
            <div className="section-subhead">A.I. Analysis
                <div className="analysis__title">Demographics</div>
                <div className="analysis__subtitle">Predicted Race & Age</div>
            </div>

            <div className="analysis__info">
                <AnalysisChoices />
                <div className="analysis__info--graphic">Caucasian
                    <div className="analysis__info--graphic--chart">
                        100%
                    </div>
                </div>
                <AnalysisBreakdown />
            </div>
            
            <div className="back" onClick={() => navigate('/analysis-menu')}>
                <img src={BackButton} alt="" />
                Back
            </div>
            <div className="analysis__ai-imperfect">If A.I. estimate is wrong, select the correct one.</div>
            <div className="analysis__buttons">
                <button className="analysis__buttons--reset">Reset</button>
                <button className="analysis__buttons--confirm">Confirm</button>
            </div>
        </section>
    )
}

export default Analysis
