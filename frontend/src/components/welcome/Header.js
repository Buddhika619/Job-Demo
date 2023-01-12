import React from "react";

export default function Header() {
  return (
    <div className="container">
      {/* ======= Top Bar ======= */}
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
          <div className="align-items-center d-none d-md-flex">
            Limited Time offer: Save 15% <span> Save Now</span>
          </div>

          <a href="/login" className="d-flex align-items-center login">
            Log In <i className="fa-solid fa-right-to-bracket"></i>
          </a>
        </div>
      </div>

      {/* ======= Header =======  */}

      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center justify-content-lg-between">
          <a href="index.html" class="logo me-auto me-lg-0">
            <img src="" alt="" class="img-fluid" />
            OCL
          </a>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto" href="#hero">
                  Why OCL?
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  Features
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Industries
                </a>
              </li>
              <li>
                <a class="nav-link scrollto " href="#portfolio">
                  Pricing
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  Resources
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#"> Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#"> Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#"> Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#"> Drop Down 5</a>
                  </li>
                </ul>
              </li>
            </ul>
            <i class="fa-solid fa-bars  mobile-nav-toggle"></i>
          </nav>

          <a href="#about" class="get-started-btn scrollto ">
            Start Free Trial
          </a>
        </div>
      </header>
    </div>
  );
}
