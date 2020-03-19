import React from 'react';
import PortfolioCard from './PortfolioCard';


const Portfolio = (props) => {

    console.log(props);

    return (<div className="container p-5 h-100 d-flex align-items-center">
                    
    <div className="row mx-auto">
        <div className="col">
            <div className="row">
                <div className="col">
                    <PortfolioCard/>

                </div>
                <div className="col">
                    <PortfolioCard/>

                </div>
            </div>
        </div>
    </div>
    
</div>)
}

export default Portfolio;