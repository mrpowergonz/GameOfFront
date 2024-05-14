import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
    return (
        <ul className='parent navBar'>
            <li><NavLink to="characters" className="div1 customNavLink">Characters</NavLink></li>
            <li><NavLink to="houses" className="div2 customNavLink">Houses</NavLink></li>
            <li><NavLink to="cronology" className="div3 customNavLink">Cronology</NavLink></li>
        </ul>
    )
}
