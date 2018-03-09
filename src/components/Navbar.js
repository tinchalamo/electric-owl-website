import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo-white.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Electric Owl Creative" style={{ width: '88px' }} />
          </figure>
          Electric Owl Creative
        </Link>
      </div>
      <div className="navbar-end">
        <div class="navbar-item">
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </div>

        <div class="navbar-item">
          <a class="button is-info" href="mailto:info@electricowlcreative.com">Contact</a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
