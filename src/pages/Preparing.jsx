
import PrepOutline1 from '../assets/imports/outline.png'
import PrepOutline2 from '../assets/imports/outline2.png'
import PrepOutline3 from '../assets/imports/outline3.png'
import React from 'react'

const Preparing = () => {

    useOutlineAnim()

    return (
        <>
            <section id="preparing">
                <img className="outline1" src={PrepOutline1} alt="" />
                <img className="outline2" src={PrepOutline2} alt="" />
                <img className="outline3" src={PrepOutline3} alt="" />
                Preparing Your Analysis...

            </section>

        </>
    )
}

export default Preparing
