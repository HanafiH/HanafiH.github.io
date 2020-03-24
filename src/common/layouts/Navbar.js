import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        const {pageChangeToProfile,pageChangeToPortfolio,pageChangeToContact} = this.props;
        return(
            <div className="position-absolute" style={{right:"15%",zIndex:99}}>
            <nav className="navbar navbar-expand-lg navbar-light w-100 ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                    {/* <a className="navbar-brand" href="#">Hanan Hanafi</a> */}
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#" onClick={pageChangeToProfile} >Profile</a> */}
                        
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#" onClick={pageChangeToPortfolio}>Portfolio</a> */}
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>

                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#" onClick={pageChangeToContact}>Contact</a> */}
                        <Link className="nav-link" to="/contact">Contact</Link>

                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar