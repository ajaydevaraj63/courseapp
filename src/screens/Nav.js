import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div><nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
       
            <Link to='/' class="nav-link active" aria-current="page" ><b>Register</b></Link>
          </li>
          <li class="nav-item">
            <Link  to='/v' class="nav-link" ><b>View</b></Link>
          </li>
          
          
        </ul>
      
      </div>
    </div>
  </nav></div>
  )
}

export default Nav