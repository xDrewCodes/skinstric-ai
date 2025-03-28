
import React from 'react'
import { useLocation } from 'react-router-dom'

const Nav = () => {

    const pg = useLocation()

    return (
        <nav>
            <div className="nav__title">
                <h4 className="nav__logo">skinstric</h4>
                <h4 className="nav__crumb">[ intro ]</h4>
            </div>
            {
                pg.pathname == '/' &&
                <button className="nav__btn">enter code</button>
            }
        </nav>
    )
}

export default Nav
