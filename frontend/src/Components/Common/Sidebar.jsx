import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item me-auto">
            <a className="navbar-brand" href="/">
              <h2 className="brand-text">React Demo</h2>
            </a>
          </li>
          <li className="nav-item nav-toggle">
            <a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
              <i className="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x" />
              <i className="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary" data-feather="disc" data-ticon="disc" />
            </a>
          </li>
        </ul>
      </div>

      <div className="shadow-bottom" />

      <div className="main-menu-content">
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

          <li className="nav-item">
            <NavLink
              to="/Dashboard"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="home" />
              <span className="menu-title text-truncate" data-i18n="Dashboards">Dashboards</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/Listing"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="user" />
              <span className="menu-title text-truncate" data-i18n="User">User</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/CategoryListing"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="mail" />
              <span className="menu-title text-truncate" data-i18n="Category">Category</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/SubCategoryListing"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="mail" />
              <span className="menu-title text-truncate" data-i18n="SubCategory">SubCategory</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/ContactListing"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="phone" />
              <span className="menu-title text-truncate" data-i18n="ContactUs">ContactUs</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/TermCondition"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="mail" />
              <span className="menu-title text-truncate" data-i18n="TermCondition">Terms & Condition</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/PrivacyPolicy"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="mail" />
              <span className="menu-title text-truncate" data-i18n="PrivacyPolicy">Privacy & Policy</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/AboutUs"
              className={({ isActive }) => `d-flex align-items-center ${isActive ? 'active' : ''}`}
            >
              <i data-feather="mail" />
              <span className="menu-title text-truncate" data-i18n="AboutUs">About Us</span>
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  )
}


export default Sidebar
