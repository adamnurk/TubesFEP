import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div >
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

        <div class="jumbotron">
          <div className="row">
            <div className=" text-center">
              <img className="images-profile"
                src="Foto S.jpg" width="250px" alt="" />
            </div>
            <div class="col-md-6 ml-5">
              <div class="profile-head">
                <h1>Adam Nur Kridabayu</h1>
                <h5>Web Defelopment</h5>
                <br />
                <div class="col-md-6">
                  <div class="tab-content profile-tab" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div class="row">
                        <div class="col-md-4">
                          <label>User Id</label>
                        </div>
                        <div class="col-md-4">
                          <p>AdamNK</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Email</label>
                        </div>
                        <div class="col-md-4">
                          <p>19104078@ittelkom-pwt.ac.id</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Phone</label>
                        </div>
                        <div class="col-md-4">
                          <p>082251528092</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label>Profession</label>
                        </div>
                        <div class="col-md-4">
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="jumbotron">
            <div className="row">
              <div className="col-3">
                <h4>Skill :</h4>
                <ul>
                  <li>HTML</li>
                  <progress value="80" max="100"></progress>
                  <li>CSS</li>
                  <progress value="80" max="100"></progress>
                  <li>React.Js</li>
                  <progress value="80" max="100"></progress>
                  <li>Next.Js</li>
                  <progress value="80" max="100"></progress>
                  <li>JavaScript</li>
                  <progress value="80" max="100"></progress>
                </ul>
              </div>
              <div>
                <h4>Source :</h4>
                <ul>
                  <li>
                    <a href="https://indonesia-public-static-api.vercel.app/api/heroes" class="text-info">Main REST API Server</a>
                  </li>
                </ul>
                <ul>
                  <li>
                  <a href="https://indonesia-public-static-api.vercel.app/api/heroes" class="text-info">Github</a>
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-2 border-top">
        <div className="container text-secondary">
          <small>
            Copyright by Adam Nur Kridabayu
          </small>
        </div>
      </div>
    </div>
  )
}
