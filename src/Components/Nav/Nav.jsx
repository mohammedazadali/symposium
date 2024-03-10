import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div className="nav">
        <div className="logo">
        TECHNOKRATZ-2K24
        </div>
        <div className="bar">
            <FontAwesomeIcon icon={faBars}/>
        </div>
    </div>
  )
}

export default Nav