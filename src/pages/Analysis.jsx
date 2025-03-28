
import React, { useEffect, useState } from 'react'
import AnalysisChoices from '../components/ui/AnalysisChoices'
import AnalysisBreakdown from '../components/ui/AnalysisBreakdown'
import BackButton from '../components/ui/BackButton'

const Analysis = () => {

    const [demo, setDemo] = useState('race')

    // let race = Object.values(demos.race)
    // race = race.sort((a, b) => b - a)
    // let raceCurrent = race[0]

    // let age = Object.values(demos.age)
    // age = age.sort((a, b) => b - a)
    // let ageCurrent = age[0]

    // let gender = Object.values(demos.gender)
    // gender = gender.sort((a, b) => b - a)
    // let genderCurrent = gender[0]

    let demos = {
        'race': 'caucasian',
        'age': '15-19',
        'sex': 'male'
    }

    return (
        <section id="analysis">
            <div className="section-subhead">A.I. Analysis
                <div className="analysis__title">Demographics</div>
                <div className="analysis__subtitle">Predicted Race & Age</div>
            </div>

            <div className="analysis__info">
                <AnalysisChoices setDemo={setDemo} demo={demo} demos={demos} />
                <div className="analysis__info--graphic">{demos[demo]}
                    <div className="analysis__info--graphic--chart">
                        100%
                    </div>
                </div>
                <AnalysisBreakdown demo={demo} demos={demos} />
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
