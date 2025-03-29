

import LocationOutline1 from '../assets/imports/outline.png'
import LocationOutline2 from '../assets/imports/outline2.png'
import LocationOutline3 from '../assets/imports/outline3.png'
import React, { useState } from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'
import axios from 'axios'

const Location = () => {

    const [legend, setLegend] = useState('Click to Type')
    const [proceed, setProceed] = useState(false)

    async function goNext(e) {
        if (e.key === 'Enter') {
            setProceed(true)
        }

        const localName = localStorage.getItem('name')
        const localLocation = localStorage.getItem('location')

        const result = await axios({
            method: 'POST',
            data: {
                name: localName,
                location: localLocation
            },
            url: 'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne'
        })
        return result

    }

    function saveLocation(loc) {
        localStorage.setItem('location', loc)
    }

    function fetchLocation() {
        return localStorage.getItem('location')
    }

    return (
        <section id="location">
            <div className="intro__outline">
                <img src={LocationOutline1} alt="" />
                <img src={LocationOutline2} alt="" />
                <img src={LocationOutline3} alt="" />
            </div>
            <div className="section-subhead">to start analysis</div>
            <div className="location__inp">
                <legend>{legend}</legend>
                <input
                    onKeyDown={(e) => goNext(e)}
                    onFocus={() => setLegend('Where are you from?')}
                    onBlur={() => setLegend('Click to Type')}
                    onChange={(e) => saveLocation(e.target.value)}
                    type="text"
                    placeholder={fetchLocation() || "Where are you from?"} />
            </div>

            <BackButton loc="/introduction" />
            <ProceedButton loc="/upload" proceed={proceed} />

        </section>
    )
}

export default Location
