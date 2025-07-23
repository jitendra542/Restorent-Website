import React from 'react'


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="row">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                Restaurant
              </a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav main-nav  clear navbar-right ">
                <li>
                  <a className="navactive color_animation" href="/#top">
                    WELCOME
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="/#story">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="/#pricing">
                    PRICING
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="/#beer">
                    BEER
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="/#bread">
                    BREAD
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="/#featured">
                    FEATURED
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="/#reservation">
                    RESERVATION
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="/#contact">
                    CONTACT
                  </a>
                </li>

                <li>
                  <a className="color_animation" href="/login">
                    LOGIN/SIGNUP
                  </a>
                </li>



              </ul>

            </div>
            {/* /.navbar-collapse */}
          </div>
        </div>
        {/* /.container-fluid */}
      </nav>
    </div>
  )
}

export default Navbar