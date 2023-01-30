import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li className="nav-item">
                  <Link to='/home' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/list' className='nav-link'>Daftar</Link>
                </li>
                <li className="nav-item">
                  <Link to='/about' className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header id="home" className="header">
          <div className="overlay" />
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="container">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="carousel-title">
                      Tugas Besar Front End Programming API Pahlawan Indonesia
                    </h1>
                    <br />
                    <button className="btn btn-primary btn-rounded m-2">
                      <Link to="/about">Profile</Link>
                    </button>
                    <button className="btn btn-primary btn-rounded">
                      <Link to="/list">Daftar Pahlawan</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos container mb-4 mb-md-2">
            <div className="title">
              {/* <h6 className="subtitle font-weight-normal">Are locking for</h6> */}
              <h5>Contact</h5>
              <p className="font-small">Connect with me.</p>
            </div>
            <div className="socials text-right">
              <div className="row justify-content-between">
                <div className="col">
                  <a className="d-block subtitle">
                    <i className="ti-email pr-2" /> 19104078@ittelkom-pwt.ac.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}


