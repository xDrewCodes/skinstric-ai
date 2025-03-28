
import React from 'react'
import BackButton from '../assets/imports/button.png'
import ItemIcon from '../assets/imports/analysis-item.png'
import ItemIconSelect from '../assets/imports/analysis-selected-item.png'
import { useNavigate } from 'react-router-dom'

const Analysis = () => {

    let navigate = useNavigate()

    return (
        <section id="analysis">
            <div className="section-subhead">A.I. Analysis
                <div className="analysis__title">Demographics</div>
                <div className="analysis__subtitle">Predicted Race & Age</div>
            </div>
            <div className="analysis__info">
                <div className="analysis__info--buttons">
                    <div className="analysis__info--button analysis__info--button--selected">
                        <h5>Caucasian</h5>
                        <h5>Race</h5>
                    </div>
                    <div className="analysis__info--button">
                        <h5>20-29</h5>
                        <h5>Age</h5>
                    </div>
                    <div className="analysis__info--button">
                        <h5>Female</h5>
                        <h5>Sex</h5>
                    </div>
                </div>
                <div className="analysis__info--graphic">Caucasian
                    <div className="analysis__info--graphic--chart">
                        100%
                    </div>
                </div>
                <div className="analysis__info--breakdown">
                    <div className="analysis__info--breakdown--title">
                        <h5>Race</h5>
                        <h5>A.I. Confidence</h5>
                    </div>

                    <div className="analysis__info--breakdown--item analysis__info--breakdown--item--selected">
                        <h5>
                            <img src={ItemIconSelect} alt="" />
                            White</h5>
                        <h5>100 %</h5>
                    </div>
                    {
                        new Array(5).fill(0).map((_, i) => (
                            <div className="analysis__info--breakdown--item" key={i}>
                                <h5>
                                    <img src={ItemIcon} alt="" />
                                    White</h5>
                                <h5>100 %</h5>
                            </div>
                        ))
                    }
                </div>
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
