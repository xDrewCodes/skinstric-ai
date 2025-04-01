import React, { useEffect, useState } from 'react'
import AnalysisChoices from '../components/ui/AnalysisChoices'
import AnalysisBreakdown from '../components/ui/AnalysisBreakdown'
import BackButton from '../components/ui/BackButton'
import AnalysisChart from '../components/ui/AnalysisChart'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Analysis = ({ demos }) => {
    const [demo, setDemo] = useState('race')
    const [editing, setEditing] = useState(false)
    const [currents, setCurrents] = useState(null)
    const [demoPerc, setDemoPerc] = useState(0) // State to store the current demo percentage

    useEffect(() => {
        if (demos) {
            const races = Object.entries(demos.race)
                .map(item => [item[0], (item[1] * 100).toFixed(2)]) // Multiply by 100 and round to two decimal places
                .sort((a, b) => b[1] - a[1])

            const ages = Object.entries(demos.age)
                .map(item => [item[0], (item[1] * 100).toFixed(2)])
                .sort((a, b) => b[1] - a[1])

            const genders = Object.entries(demos.gender)
                .map(item => [item[0], (item[1] * 100).toFixed(2)])
                .sort((a, b) => b[1] - a[1])

            const raceCurrent = races[0][0]
            const ageCurrent = ages[0][0]
            const genderCurrent = genders[0][0]

            setCurrents({ race: raceCurrent, age: ageCurrent, sex: genderCurrent })

            // Set initial demoPerc value for the race demographic (or default to the first selected demo)
            setDemoPerc(demos[demo][raceCurrent] * 100)
        }
    }, [demos])

    function updateCurrent(key, value) {
        setCurrents(prev => ({ ...prev, [key]: value }))
        setDemoPerc(demos[demo][value] * 100) // Update the percentage when the demographic changes
    }

    function saveDemos() {
        localStorage.setItem('race', currents?.race) // Add optional chaining
        localStorage.setItem('age', currents?.age) // Add optional chaining
        localStorage.setItem('sex', currents?.sex) // Add optional chaining
        setEditing(false)
    }

    if (!demos || !currents) { // Make sure currents is not null
        return (
            <section id="analysis">
                <div className="analysis__no-data">
                    You need to submit an image to be scanned to view your demographics.
                </div>
            </section>
        )
    }

    let inTl

    useGSAP(() => {
        inTl = gsap.timeline()
        .from('#analysis', { opacity: 0, duartion: 1.1 })
    })

    return (
        <section id="analysis">
            <div className="section-subhead">A.I. Analysis
                <div className="analysis__title">Demographics</div>
                <div className="analysis__subtitle">Predicted Race & Age</div>
            </div>

            <div className="analysis__info">
                <AnalysisChoices setDemo={setDemo} demo={demo} currents={currents} updateCurrent={updateCurrent} />
                <div className="analysis__info--graphic">
                    {currents[demo]} {/* Only display after currents is set */}
                    <AnalysisChart demoPerc={demoPerc} /> {/* Pass demoPerc to AnalysisChart */}
                </div>
                <AnalysisBreakdown setEditing={setEditing} demo={demo} weights={demos} currents={currents} updateCurrent={updateCurrent} />
            </div>

            <BackButton loc="/analysis-menu" />

            <div className="analysis__ai-imperfect">If A.I. estimate is wrong, select the correct one.</div>
            <div className="analysis__buttons">
                {!editing ? (
                    <>
                        <button className="analysis__buttons--disabled analysis__buttons--reset">Reset</button>
                        <button className="analysis__buttons--confirm analysis__buttons--disabled">Confirm</button>
                    </>
                ) : (
                    <>
                        <button className="analysis__buttons--reset">Reset</button>
                        <button onClick={saveDemos} className="analysis__buttons--confirm">Confirm</button>
                    </>
                )}
            </div>
        </section>
    )
}

export default Analysis
