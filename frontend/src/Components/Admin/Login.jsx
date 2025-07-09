import React from 'react'

function Login() {
  return (
    <>
      <div className="app-content content">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="auth-wrapper auth-v2">
              <div className="auth-inner row m-0">
                <a className="brand-logo" href="#">
                  <svg
                    viewBox="0 0 139 95"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    height={28}
                  >
                    <defs>
                      <linearGradient
                        id="linearGradient-1"
                        x1="100%"
                        y1="10.5120544%"
                        x2="50%"
                        y2="89.4879456%"
                      >
                        <stop stopColor="#000000" offset="0%" />
                        <stop stopColor="#FFFFFF" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        id="linearGradient-2"
                        x1="64.0437835%"
                        y1="46.3276743%"
                        x2="37.373316%"
                        y2="100%"
                      >
                        <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                        <stop stopColor="#FFFFFF" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-400, -178)">
                        <g transform="translate(400, 178)">
                          <path
                            className="text-primary"
                            d="M0,0 L39.18,0 L69.34,32.25 L101.42,0 L138.78,0 L138.78,29.80 C137.96,37.35 135.78,42.56 132.26,45.42 C128.73,48.28 112.33,64.52 83.06,94.14 L56.27,94.14 L6.71,44.41 C2.46,39.98 0.34,35.10 0.34,29.80 C0.34,24.49 0.23,14.56 0,0 Z"
                            style={{ fill: "currentColor" }}
                          />
                          <path
                            d="M69.34,32.25 L101.42,0 L138.78,0 L138.78,29.80 C137.96,37.35 135.78,42.56 132.26,45.42 C128.73,48.28 112.33,64.52 83.06,94.14 L56.27,94.14 L32.84,70.50 L69.34,32.25 Z"
                            fill="url(#linearGradient-1)"
                            opacity="0.2"
                          />
                          <polygon
                            fill="#000"
                            opacity="0.05"
                            points="69.39 32.42 32.84 70.50 54.04 16.18"
                          />
                          <polygon
                            fill="#000"
                            opacity="0.10"
                            points="69.39 32.42 32.84 70.50 58.36 20.74"
                          />
                          <polygon
                            fill="url(#linearGradient-2)"
                            opacity="0.10"
                            points="101.42 0 83.06 94.14 130.37 47.07"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h2 className="brand-text text-primary ms-1">React</h2>
                </a>

                <div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
                  <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    <img
                      className="img-fluid"
                      src="../../../app-assets/images/pages/login-v2.svg"
                      alt="Login V2"
                    />
                  </div>
                </div>

                <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                  <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <h2 className="card-title fw-bold mb-1">Welcome to React Project 👋</h2>
                    <p className="card-text mb-2">
                      Please sign-in to your account and start the adventure
                    </p>

                    <form className="auth-login-form mt-2" action="index.html" method="POST">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="login-email">
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="login-email"
                          type="text"
                          name="login-email"
                          placeholder="john@example.com"
                          aria-describedby="login-email"
                          autoFocus
                          tabIndex={1}
                        />
                      </div>

                      <div className="mb-1">
                        <div className="d-flex justify-content-between">
                          <label className="form-label" htmlFor="login-password">
                            Password
                          </label>
                        </div>
                        <div className="input-group input-group-merge form-password-toggle">
                          <input
                            className="form-control form-control-merge"
                            id="login-password"
                            type="password"
                            name="login-password"
                            placeholder="············"
                            aria-describedby="login-password"
                            tabIndex={2}
                          />
                          <span className="input-group-text cursor-pointer">
                            <i data-feather="eye" />
                          </span>
                        </div>
                      </div>
                      <button className="btn btn-primary w-100" tabIndex={4}>
                        Sign in
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login