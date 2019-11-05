import React from 'react';
import '../../assets/css/nav.scss'

class Navbar extends React.Component{
    render (){
        return (
            <nav>
            <div class="nav-wrapper" id="nav">
              <a href="#" class="brand-logo">Portfolio</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/#/about">About</a></li>
                <li><a href="/#/register">Signup</a></li>
              </ul>
            </div>
          </nav>   

        )
    }
}

export default Navbar;