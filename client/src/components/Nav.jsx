
import React from 'react'
import { useLocation } from 'react-router-dom'

const Nav = () => {

    const pg = useLocation()
    const path = pg.pathname

    return (
        <nav>
            {
                pg.pathname !== '/preparing' &&
                <div className="nav__title">
                    <h4 className="nav__logo">Skinstric</h4>
                    {
                        ( path === '/analysis' || path === '/analysis-menu' ) &&
                        <h4 className="nav__crumb">[ Analysis ]</h4>
                    }
                    {
                        path === '/upload' &&
                        <h4 className="nav__crumb">[ Upload ]</h4>
                    }
                    {
                        ( path === '/introduction' || path === '/location' ) &&
                        <h4 className="nav__crumb">[ Intro ]</h4>
                    }
                </div>
            }
            {
                pg.pathname === '/' &&
                <button className="nav__btn">enter code</button>
            }
        </nav>
    )
}

export default Nav
