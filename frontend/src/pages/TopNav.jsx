import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNav() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand logoText" href="/#">Afya Bora</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item text-center">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav