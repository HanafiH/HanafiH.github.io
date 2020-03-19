import React, { Component } from "react";
import Navbar from '../common/layouts/Navbar';
import Profile from '../common/component/Profile';
import Portfolio from '../common/component/Portfolio';
import Contact from '../common/component/Contact';

class HomeComponent extends React.Component{

    render(){
        const {initialData,pageChangeToProfile,pageChangeToPortfolio,pageChangeToContact} = this.props;

        return (
            <div style={{boxSizing:"content-box"}} className="p-3 text-white bg-grad h-75 w-75 mx-auto rounded shadow">
                <Navbar pageChangeToProfile={pageChangeToProfile} pageChangeToPortfolio={pageChangeToPortfolio} pageChangeToContact={pageChangeToContact}/>
                { initialData.page==1 &&  <Profile />}
                { initialData.page==2 &&  <Portfolio/>}
                { initialData.page==3 &&  <Contact/>}
            </div>
        )
    }
}

export default HomeComponent;