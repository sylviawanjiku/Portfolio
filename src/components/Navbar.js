import React from 'react';
import '../assets/scss/nav.scss'

class Navbar extends React.Component{
    render (){
        return (
            <nav class="navbar-transition cool-navbar z-depth-0">
            <div class="nav-wrapper" id="nav">
              <a href="/r" class="brand-logo">Portfolio</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a id= "nav-text"href="#">Projects</a></li>
                <li><a href="#">Resume</a></li>
              </ul>
            </div>
          </nav>   
        )
    }
}

export default Navbar;