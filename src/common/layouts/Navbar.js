import React, { Component } from "react";


class Navbar extends Component{
    render(){
        const {pageChangeToProfile,pageChangeToPortfolio,pageChangeToContact} = this.props;
        return(
            <div className="position-absolute" style={{right:"15%",zIndex:99}}>
            <nav class="navbar navbar-expand-lg navbar-light w-100 ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
                    {/* <a class="navbar-brand" href="#">Hanan Hanafi</a> */}
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" onClick={pageChangeToProfile} >Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={pageChangeToPortfolio}>Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={pageChangeToContact}>Contact</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar