import React from "react";

import './Home.css';

function Home({ onSignOut }) {
    return (
        <>
            <div className="home-container">
                <h1 className="home-text">Welcome to the <br />Sports Store</h1>
                <p className="home-text1">Your one-stop shop for all sports gear and accessories!</p>
            </div>
            
        </>
    );
}

export default Home;
