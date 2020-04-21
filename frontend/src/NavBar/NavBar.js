import React from 'react';
import './navbar.css'
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        return ( 

                    <nav className="navbar scrolling-navbar fixed-top navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                            <a className="navbar-brand text-white mr-auto mt-2 mt-lg-0" href="http://localhost:3000">Sharnie Pilar</a>
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="http://localhost:3000">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#news">Latest News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#work">My Work</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/AfterCare" className="nav-link text-white" href="#care">After Care</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">Contact Me</a>
                            </li>
                            {localStorage.token ? <li className="nav-item">
                                <a className="nav-link text-white" href="/admin">Admin Panel</a>
                            </li> : null}
                            </ul>
                        </div>
                    </nav>                   

         );
    }
}
 
export default NavBar;