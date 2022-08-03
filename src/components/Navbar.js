import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // const blue = "blue"
    // const green = "green"
    // const white = "white"

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand" to="/"><i><strong><h3><u>{props.title}</u></h3></strong></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active mx-1">
                            <Link style={{textDecoration: "none"}} className="nav-a" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link style={{textDecoration: "none"}} className="nav-a" to="/about">{props.about}</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
              <a className="nav-a dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li> */}
                        {/* <li className="nav-item">
              <a className="nav-a disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
                <div className="dropdown mx-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dark Mode
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button className='btn' onClick={()=>{props.handleDark("#151f59")}}>Enable Blue Theme Dark Mode</button>
                        </li>
                        <li>
                            <button className='btn' onClick={()=>{props.handleDark("#234b2c")}}>Enable Green Theme Dark Mode</button>
                        </li>
                        <li>
                            <button className='btn' onClick={()=>{props.handleDark("white")}} >Disable Dark Mode</button>
                        </li>
                    </ul>
                </div>
                {/* <div className="form-check form-switch" >
                    <input className="form-check-input" onClick={props.handleDark} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Enable Blue {props.mode === "light" ? "dark" : "light"} Mode</label>
                </div> */}
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Title",
    about: "About Us"
}