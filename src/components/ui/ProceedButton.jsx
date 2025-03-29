
import React from 'react'
import BackButtonImg from '../../assets/imports/button.png'
import { useNavigate } from 'react-router-dom'

const ProceedButton = ({ loc, proceed }) => {

    let navigate = useNavigate()

    return (
        <>
            {
                proceed &&
                <div className="proceed" onClick={() => navigate(loc)}>
                    Proceed
                    <img src={BackButtonImg} alt="" />
                </div>
            }
        </>
    )
}

export default ProceedButton
