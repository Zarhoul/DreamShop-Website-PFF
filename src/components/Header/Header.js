import React from 'react'
import FirstBar from './FirstBar'
import SecondBar from './SecondBar'
import NavBar from './NavBar'

function Header() {
    return (
        <>
            <div className='container-fluid'>
                <FirstBar />
                <SecondBar />
                <NavBar />
            </div>
        </>
    )
}

export default Header