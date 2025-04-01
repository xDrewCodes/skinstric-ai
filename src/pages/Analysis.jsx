import React, { useEffect, useState } from 'react'
import AnalysisChoices from '../components/ui/AnalysisChoices'
import AnalysisBreakdown from '../components/ui/AnalysisBreakdown'
import BackButton from '../components/ui/BackButton'
import AnalysisChart from '../components/ui/AnalysisChart'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'

const Analysis = ({ demos }) => {
    const [demo, setDemo] = useState('race')
    const [editing, setEditing] = useState(false)
    const [currents, setCurrents] = useState(null)
    const [demoPerc, setDemoPerc] = useState(0)

    let inTl
    useGSAP(() => inTl = gsap.timeline().from('#analysis', { opacity: 0, duration: 1.1 }))

    let navigate = useNavigate()

    useEffect(() => {
        if (demos) {
            const races = Object.entries(demos.race)
                .map(item => [item[0], (item[1] * 100).toFixed(2)])
                .sort((a, b) => b[1] - a[1])

            const ages = Object.entries(demos.age)
                .map(item => [item[0], (item[1] * 100).toFixed(2)])
                .sort((a, b) => b[1] - a[1])

            const genders = Object.entries(demos.gender)
                .map(item => [item[0], (item[1] * 100).toFixed(2)])
                .sort((a, b) => b[1] - a[1])

            let raceCurrent = races[0][0]
            let ageCurrent = ages[0][0]
            let genderCurrent = genders[0][0]

            if (!localStorage.getItem('race')) {localStorage.setItem('race', raceCurrent)} else {
                raceCurrent = localStorage.getItem('race')
            }
            if (!localStorage.getItem('age')) {localStorage.setItem('age', ageCurrent)} else {
                ageCurrent = localStorage.getItem('age')
            }
            if (!localStorage.getItem('sex')) {localStorage.setItem('sex', genderCurrent)} else {
                genderCurrent = localStorage.getItem('sex')
            }


            setCurrents({ race: raceCurrent, age: ageCurrent, sex: genderCurrent })

            setDemoPerc(demos[demo][raceCurrent] * 100)
        }
    }, [demos])

    function updateCurrent(key, value) {
        setCurrents(prev => ({ ...prev, [key]: value }))
        setDemoPerc(demos[demo][value] * 100)
    }

    function saveDemos() {
        localStorage.setItem('race', currents?.race)
        localStorage.setItem('age', currents?.age)
        localStorage.setItem('sex', currents?.sex)
        setEditing(false)
    }

    function resetDemos() {
        setCurrents({
            'race': localStorage.getItem('race'),
            'age': localStorage.getItem('age'),
            'sex': localStorage.getItem('sex')
        })
        setEditing(false)
    }

    if (!demos || !currents) { // Make sure currents is not null
        return (
            <section id="analysis">
                <div className="analysis__no-data">
                    You need to submit an image to be scanned to view your demographics.
                    <div
                    onClick={() => navigate('/upload')}
                    className="analysis__no-data--link">Upload image</div>
                </div>
            </section>
        )
    }

    return (
        <section id="analysis">
            <div className="section-subhead">A.I. Analysis
                <div className="analysis__title">Demographics</div>
                <div className="analysis__subtitle">Predicted Race & Age</div>
            </div>

            <div className="analysis__info">
                <AnalysisChoices setDemo={setDemo} demo={demo} demos={demos} setDemoPerc={setDemoPerc} demoPerc={demoPerc} currents={currents} updateCurrent={updateCurrent} />
                <div className="analysis__info--graphic">
                    {currents[demo]} {/* Only display after currents is set */}
                    <AnalysisChart demoPerc={demoPerc} /> {/* Pass demoPerc to AnalysisChart */}
                </div>
                <AnalysisBreakdown editing={editing} setEditing={setEditing} demo={demo} setDemoPerc={setDemoPerc} weights={demos} currents={currents} setCurrents={setCurrents} updateCurrent={updateCurrent} />
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
                        <button onClick={resetDemos} className="analysis__buttons--reset">Reset</button>
                        <button onClick={saveDemos} className="analysis__buttons--confirm">Confirm</button>
                    </>
                )}
            </div>
        </section>
    )
}

export default Analysis
