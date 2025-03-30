
import React, { useEffect, useState } from 'react'
import AnalysisChoices from '../components/ui/AnalysisChoices'
import AnalysisBreakdown from '../components/ui/AnalysisBreakdown'
import BackButton from '../components/ui/BackButton'
import AnalysisChart from '../components/ui/AnalysisChart'

const Analysis = ({ demos }) => {

    const [demo, setDemo] = useState('race')
    const [editing, setEditing] = useState(false)

    let races, raceCurrent, ages, ageCurrent, genders, genderCurrent, weights, currents

    if (demos) {

        races = Object.entries(demos.race)
        ages = Object.entries(demos.age)
        genders = Object.entries(demos.gender)

        races = races.map(item => [item[0], (item[1] * 100).toFixed(2)])
        races = races.sort((a, b) => b[1] - a[1])

        ages = ages.map(item => [item[0], (item[1] * 100).toFixed(2)])
        ages = ages.sort((a, b) => b[1] - a[1])

        genders = genders.map(item => [item[0], (item[1] * 100).toFixed(2)])
        genders = genders.sort((a, b) => b[1] - a[1])

        weights = {
            'race': races,
            'age': ages,
            'sex': genders
        }

        raceCurrent = races[0][0]
        ageCurrent = ages[0][0]
        genderCurrent = genders[0][0]

        currents = {
            'race': raceCurrent,
            'age': ageCurrent,
            'sex': genderCurrent
        }

        localStorage.setItem('race', raceCurrent)
        localStorage.setItem('age', ageCurrent)
        localStorage.setItem('sex', genderCurrent)

    }


    function saveDemos(race, age, sex) {

        setEditing(false)

    }


    return (

        <section id="analysis">
            <div className="section-subhead">A.I. Analysis
                <div className="analysis__title">Demographics</div>
                <div className="analysis__subtitle">Predicted Race & Age</div>
            </div>

            <div className="analysis__info">
                <AnalysisChoices setDemo={setDemo} demo={demo} currents={currents} />
                <div className="analysis__info--graphic">{
                    currents[demo]
                }

                    <AnalysisChart demoPerc={races[0][1]} />

                </div>
                <AnalysisBreakdown setEditing={setEditing} demo={demo} weights={weights} currents={currents} />
            </div>

            <BackButton loc="/analysis-menu" />

            <div className="analysis__ai-imperfect">If A.I. estimate is wrong, select the correct one.</div>
            <div className="analysis__buttons">
                {
                    !editing
                        ?
                        <>
                            <button className="analysis__buttons--disabled analysis__buttons--reset">Reset</button>
                            <button className="analysis__buttons--confirm analysis__buttons--disabled">Confirm</button>
                        </>
                        :
                        <>
                            <button className="analysis__buttons--reset">Reset</button>
                            <button
                            onClick={saveDemos}
                            className="analysis__buttons--confirm">Confirm</button>
                        </>
                }
            </div>
        </section>
    )
}

export default Analysis
