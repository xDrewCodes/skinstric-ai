
import React from 'react'

const AnalysisChoices = ({ setDemo, demo, demos, currents, demoPerc, setDemoPerc }) => {

    return (
        <>
            {currents &&
                <div className="analysis__info--buttons">
                    <div
                        onClick={() => {
                            setDemo('race')
                            setDemoPerc(demos.race[localStorage.getItem('race')] * 100)
                        }}
                        className={`analysis__info--button ${demo === 'race' && 'analysis__info--button--selected'}`}>
                        <h5>{currents.race}</h5>
                        <h5>Race</h5>
                    </div>
                    <div
                        onClick={() => {
                            setDemo('age')
                            console.log(demos)
                            setDemoPerc(demos.age[localStorage.getItem('age')] * 100)
                        }}
                        className={`analysis__info--button ${demo === 'age' && 'analysis__info--button--selected'}`}>
                        <h5>{currents.age}</h5>
                        <h5>Age</h5>
                    </div>
                    <div
                        onClick={() => {
                            setDemo('sex')
                            setDemoPerc(demos.gender[localStorage.getItem('sex')] * 100)
                        }}
                        className={`analysis__info--button ${demo === 'sex' && 'analysis__info--button--selected'}`}>
                        <h5>{currents.sex}</h5>
                        <h5>Sex</h5>
                    </div>
                </div>
            }
        </>
    )
}

export default AnalysisChoices
