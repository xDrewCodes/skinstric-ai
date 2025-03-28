
import React from 'react'
import AnalysisChoices from '../components/ui/AnalysisChoices'
import AnalysisBreakdown from '../components/ui/AnalysisBreakdown'
import BackButton from '../components/ui/BackButton'

const Analysis = () => {
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
            
            <BackButton loc="/analysis-menu" />

            <div className="analysis__ai-imperfect">If A.I. estimate is wrong, select the correct one.</div>
            <div className="analysis__buttons">
                <button className="analysis__buttons--reset">Reset</button>
                <button className="analysis__buttons--confirm">Confirm</button>
            </div>
        </section>
    )
}

export default Analysis
