import React from 'react';


const Contact = (props) => {

    console.log("Contact");

    return (
        <div className="row h-100 m-0 p-0 d-flex align-items-center ">
            <span className="mr-4" style={{color:"#000533"}}> 
                <h1 style={{color:"#000533"}}>Find me on :</h1>
                <div style={{width:"56px",height:"10px",backgroundColor:"#f6d4b4"}}></div>
                <div className="text-white">
                    <div className="rounded p-2" style={{backgroundColor:"#C13584"}}>
                        <h2>Instagram : @hananhnfi</h2>
                    </div>
                </div>
                
            </span>
                    
        </div>
    )
}

export default Contact;