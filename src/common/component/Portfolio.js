import React from 'react';
import PortfolioCard from './PortfolioCard';


class Portfolio extends React.Component {
    state = {
        portfolioData : [
            {
                urlIamge : require(`../../assets/images/portfolio-bg-ted.png`),
                title : "Website TED UGM 2019",
                link : "https://www.tedugm.com",
                desc : "Ted UGM adalah acara tahunan dari Departemen Teknik Elektro dan Informatika Sekolah Vokasi Universitas Gadjah Mada. Saya tergabung sebagai IT Support yang menhandle website terutama merealisasikan design User Interface Webstie dengan HTML, CSS, dan Javascript."
            }
        ]
    }

    render(){

    return (
    <div className="container h-100 mx-0 mt-5 p-0 position-relative d-flex align-items-center" style={{color:"#000533"}}>
        <span>

                
    <h1 className="text-center">My Portfolio</h1>  

        <div className="row">
            <div className="col-2 d-flex align-items-center">
                <i  style={{fontSize:"56px",color:"#f6d4b4"}} class="fas fa-arrow-circle-left ml-auto"></i>
            </div>
            <div className="col ">
                <PortfolioCard/>
            </div>
            <div className="col-2 d-flex align-items-center">
                <i style={{fontSize:"56px",color:"#f6d4b4"}} class="fas fa-arrow-circle-right"></i>

            </div>
        </div>
        
        {/* <div className="row h-75 p-0 mr-5 position-absolute d-flex align-items-center w-50" style={{backgroundColor:"",overflowY:"scroll",bottom:"",left:"20%",right:"",border:"1px #f6d4b4 solid"}}>
            <div className="col">
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>

            </div>
        </div> */}
        </span>
    
    </div>
    )
}

}

export default Portfolio;