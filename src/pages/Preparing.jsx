
import PrepOutline1 from '../assets/imports/outline.png'
import PrepOutline2 from '../assets/imports/outline2.png'
import PrepOutline3 from '../assets/imports/outline3.png'
import React from 'react'
import ProceedButton from '../components/ui/ProceedButton'

const Preparing = () => {
    return (
        <>
            <section id="preparing">
                <img src={PrepOutline1} alt="" />
                <img src={PrepOutline2} alt="" />
                <img src={PrepOutline3} alt="" />
                Preparing Your Analysis...

            </section>

            <ProceedButton loc="/analysis-menu" />

        </>
    )
}

export default Preparing
