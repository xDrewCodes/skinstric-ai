
import { useNavigate } from 'react-router-dom'
import LandingButton from '../../assets/imports/landing-button.png'
import LandingOutline from '../../assets/imports/landing-outline.png'
import React from 'react'

const Landing = () => {

    let navigate = useNavigate()

    return (
        <section id="home">
            <div className="landing__discover">
                <img src={LandingOutline} alt="" className="landing__discover--outline" />
                <h4 className="landing__discover--option">
                    <img src={LandingButton} alt="Discover" />
                    discover a.i.
                </h4>
            </div>
            <div className="landing__title">
                <h1 className="landing__soph">Sophisticated</h1>
                <h1 className="landing__skin">skincare</h1>
            </div>
            <div className="landing__test">
                <img src={LandingOutline} alt="" className="landing__test--outline" />
                <h4 className="landing__test--option">
                    take test
                    <img src={LandingButton} alt="Test" onClick={() => navigate('/introduction')} />
                </h4>
            </div>
            <div className="landing__fine">
                Skinstric developed an A.I. that creates
                a highly-personalised routine tailored to
                what your skin needs.
            </div>
        </section>
    )
}

export default Landing
