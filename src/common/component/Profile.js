import React from 'react';


const Profile = (props) => {

    console.log(props);
    const image1 = require(`../../assets/images/profile-pic.png`);

    return (<div className="container p-5 h-100 d-flex align-items-center">
                    
    <div className="row">
        <div className="col">
            <div className="row">
            <h6 className="ml-auto">Profile</h6>

            </div>
            <div className="row">
                <div className="col-12 col-md-6 my-auto">
                    <img src={image1} className="img-fluid w-75" alt=""/>

                </div>
                <div className="col-12 col-md-6 my-auto">
                    <h1>Hanan Hanafi</h1>
                    <p>My name is Hanan Hanafi. I was born in Jakarta on December 21, 2000. Now I live in Yogyakarta for a study at Gadjah Mada University, major in Computer and Information System. I am a self-starter and have a thirst for learning. I enthusiast with software development, especially in website and mobile.</p>
                </div>
            </div>
        </div>
    </div>
    
</div>)
}

export default Profile;