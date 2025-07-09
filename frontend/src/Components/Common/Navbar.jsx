import React from 'react'

function Navbar() {
    return (
        <>
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

                        <ul className="nav navbar-nav bookmark-icons">
                        </ul>
                        <ul className="nav navbar-nav">
                        </ul>
                    </div>
                    <ul className="nav navbar-nav align-items-center ms-auto">
                        <li className="nav-item dropdown dropdown-user">
                            <a
                                className="nav-link dropdown-toggle dropdown-user-link"
                                id="dropdown-user"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <div className="user-nav d-sm-flex d-none">
                                    <span className="user-name fw-bolder"></span>
                                    <span className="user-status">Admin</span>
                                </div>
                                <img height={"50px"} width={"70px"}
                                    className="img-fluid rounded mb-100"
                                    alt="avatar img"
                                />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="dropdown-user">
                                <a className="dropdown-item" >
                                    <i className="me-50" data-feather="user" /> Profile
                                </a>

                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="page-account-settings.html">
                                    <i className="me-50" data-feather="settings" /> Change Password
                                </a>
                                <a className="dropdown-item">
                                    <i className="me-50" data-feather="power" /> Logout

                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar