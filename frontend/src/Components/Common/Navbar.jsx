import React from 'react';
import { Power, Settings, User } from 'react-feather';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
            <div className="navbar-container d-flex content">
                <div className="bookmark-wrapper d-flex align-items-center">
                    <ul className="nav navbar-nav d-xl-none">
                        <li className="nav-item">
                            <a className="nav-link menu-toggle" href="#">
                                <i className="ficon" data-feather="menu" />
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className="nav navbar-nav align-items-center ms-auto">
                    <li className="nav-item dropdown">
                        <button
                            className="nav-link dropdown-toggle btn btn-link d-flex align-items-center"
                            id="dropdown-user"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="user-nav d-sm-flex d-none text-start">
                                <span className="user-name fw-bolder d-block">Admin</span>
                                <span className="user-status">Admin</span>
                            </div>
                            <img
                                height="40"
                                width="40"
                                className="img-fluid rounded-circle ms-1"
                                src="/app-assets/images/avatars/avatar.png" // Replace with actual image path
                                alt="Admin Avatar"
                            />
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
                            <li>
                                <NavLink
                                    to="/ViewProfile"
                                    className={({ isActive }) =>
                                        `dropdown-item d-flex align-items-center ${isActive ? 'active' : ''}`
                                    }
                                >
                                    <User className="me-50" />
                                    <span>Profile</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/ChangePassword"
                                    className={({ isActive }) =>
                                        `dropdown-item d-flex align-items-center ${isActive ? 'active' : ''}`
                                    }
                                >
                                    <Settings className="me-50" />
                                    <span>Change Password</span>
                                </NavLink>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <Power className="me-50" />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
