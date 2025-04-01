

import LocationOutline1 from '../assets/imports/outline.png'
import LocationOutline2 from '../assets/imports/outline2.png'
import LocationOutline3 from '../assets/imports/outline3.png'
import React, { useEffect, useState } from 'react'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useOutlineAnim } from '../anim'

const Location = () => {

    useOutlineAnim()

    const [legend, setLegend] = useState('Click to Type')
    const [proceed, setProceed] = useState(false)

    let navigate = useNavigate()

    async function goNext(e) {
        if (e.key === 'Enter') {
            navigate('/upload')

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

    }

    function checkInp(loc) {
        let reg = /^[A-Za-z\s]+$/
        return reg.test(loc)
    }

    function saveLocation(loc) {
        if (checkInp(loc)) {
            localStorage.setItem('location', loc)
            setProceed(true)
        } else {
            setProceed(false)
        }
    }

    function fetchLocation() {
        return localStorage.getItem('location')
    }

    useEffect(() => {
            let loc = localStorage.getItem('location')
            if (loc && checkInp(loc)) {
                setProceed(true)
            }
        }, [])

    return (
        <section id="location">
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
