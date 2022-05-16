import React from 'react'
import { useState,Icon } from 'react'
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';

const Navbar = () => {

    const [navbar, setnavbar] = useState(false)

    return (
        <nav className='navbar'>
            <div className='navbar-base'>
                <div className='navbar-links'>
                    <Link className='nav-link' to="#"><Icon className="icon" icon="codicon:home"></Icon></Link>
                    <Link className='nav-link' to="#"><div className='title'>Main</div></Link>
                </div>
                <div className='navbar-links'>
                    <Link className='nav-link' to="#"><Icon className="icon" icon="ant-design:phone-twotone"></Icon></Link>
                    <Link className='nav-link' to="#"><div className='title'>Contact</div></Link>

                </div>
                <div className='navbar-links' onClick={() => console.log("clicked")}>
                    <Link className='nav-link' to='#'><Icon className="icon" icon="fa:github"></Icon></Link>
                    <Link className='nav-link' to='#'><div className='title'>Projects</div></Link>
                </div>
                <div className='navbar-links' onClick={() => setnavbar(!navbar)}>
                    <Link className='nav-link' to='#'><Icon className="icon" icon="carbon:settings"></Icon></Link>
                    <Link className='nav-link' to='#'><div className='title'>Settings</div></Link>
                </div>
            </div>
            <div className={navbar ? "navbar-settings  open" : "navbar-settings"}>
                <div className='navbar-links' onClick={() => console.log("clicked")}>
                    <Link className='nav-link' to='#'><Icon className="icon" icon="ic:outline-dark-mode"></Icon></Link>
                    {/* <p className='nav-link'>A</p> */}
                    <Link className='nav-link' to='#'><div className='title'>Dark mode</div></Link>
                </div>
                <div className='navbar-links' onClick={() => console.log("clicked")}>
                    <Link className='nav-link' to='#'><Icon className="icon" icon="bx:anchor"></Icon></Link>
                    {/* <p className='nav-link'>A</p> */}
                    <Link className='nav-link' to='#'><div className='title'>Set as home</div></Link>
                </div>
                <div className='navbar-links' onClick={() => console.log("clicked")} >
                    <Link className='nav-link' to='#'><Icon className="icon" icon="cil:language"></Icon></Link>
                    {/* <p className='nav-link'>A</p> */}
                    <Link className='nav-link' to='#'><div className='title'>Language</div></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar