
import React from 'react'
import BackButtonImg from '../../assets/imports/button.png'
import { useNavigate } from 'react-router-dom'

const ProceedButton = ({ loc }) => {

    let navigate = useNavigate()

    return (
        <div className="proceed" onClick={() => navigate(loc)}>
            Proceed
            <img src={BackButtonImg} alt="" />
        </div>
    )
}

export default ProceedButton
