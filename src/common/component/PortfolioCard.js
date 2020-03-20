import React from 'react';


const PortfolioCard = (props) => {
    const image1 = require(`../../assets/images/portfolio-bg-ted.png`);


    console.log(props);

    return (
        <div>
        <div className="card" style={{width: ""}}>
        <img src={image1} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    )
}

export default PortfolioCard;