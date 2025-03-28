

import { useNavigate } from 'react-router-dom'
import BackButton from '../assets/imports/button.png'
import BirthplaceOutline1 from '../assets/imports/outline.png'
import BirthplaceOutline2 from '../assets/imports/outline2.png'
import BirthplaceOutline3 from '../assets/imports/outline3.png'
import React from 'react'

const Birthplace = () => {

    let navigate = useNavigate()

    return (
        <section id="birthplace">
            <div className="intro__outline">
                <img src={BirthplaceOutline1} alt="" />
                <img src={BirthplaceOutline2} alt="" />
                <img src={BirthplaceOutline3} alt="" />
            </div>
            <div className="section-subhead">to start analysis</div>
            <div className="birthplace__inp">
                <legend>click to type</legend>
                <input type="text" placeholder="Where are you from?" />
            </div>
            <div className="back" onClick={() => navigate('/introduction')}>
                <img src={BackButton} alt="Go Back" />
                Back
            </div>
        </section>
    )
}

export default Birthplace
