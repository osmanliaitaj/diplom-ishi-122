import React from 'react'
import Brendim from './assets/svg/logo.svg'
const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"> <img src={Brendim} alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-5">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">İndex</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Kataloq</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Xəbərlər</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar