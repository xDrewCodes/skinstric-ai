
import React from 'react'
import { useParams } from 'react-router-dom'

const Nav = () => {

    const pg = window.location.pathname

    console.log(pg)

    return (
        <nav>
            <div className="nav__title">
                <h4 className="nav__logo">skinstric</h4>
                <h4 className="nav__crumb">[ intro ]</h4>
            </div>
            <button className="nav__btn">enter code</button>
        </nav>
    )
}

export default Nav
