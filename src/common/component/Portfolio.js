import React from 'react';
import PortfolioCard from './PortfolioCard';


const Portfolio = (props) => {

    console.log(props);

    return (
    <div className="container h-100 m-0 p-0">
                    
        <div className="row h-75 p-0 m-0 position-absolute" style={{backgroundColor:"",overflow:"scroll",bottom:"5%",right:"5%"}}>
            <div className="col text-center">
                <PortfolioCard/>

            </div>
            <div className="col">
                <PortfolioCard/>

            </div>
            <div className="col">
                <PortfolioCard/>
            </div>
        </div>
    
    </div>
)
}

export default Portfolio;