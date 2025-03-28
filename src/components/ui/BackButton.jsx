
import { useNavigate } from 'react-router-dom'
import BackButtonImg from '../../assets/imports/button.png'
import React from 'react'

const BackButton = ({ loc }) => {

    let navigate = useNavigate()

    return (
        <div className="back" onClick={() => navigate(loc)}>
            <img src={BackButtonImg} alt="" />
            Back
        </div>
    )
}

export default BackButton
