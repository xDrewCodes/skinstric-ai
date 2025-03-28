

import BirthplaceOutline1 from '../assets/imports/outline.png'
import BirthplaceOutline2 from '../assets/imports/outline2.png'
import BirthplaceOutline3 from '../assets/imports/outline3.png'
import React from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'

const Birthplace = () => {
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

            <BackButton loc="/introduction" />
            <ProceedButton loc="/upload" />

        </section>
    )
}

export default Birthplace
