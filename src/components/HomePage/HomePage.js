import React from "react";
import imgTest from "../../images/test-tube-svgrepo-com.png";
import './HomePage.css';

const HomePage = ()=>{
    const handleTouch = ()=>{
        alert('Touch Event Detected');
    }
    return (
        <div className="container">

        <div>
            <img src={imgTest} onClick={handleTouch}/>
            <img src={imgTest} onClick={handleTouch}/>
            <img src={imgTest} onClick={handleTouch}/>
        </div>
        <div>
            <img src={imgTest} onClick={handleTouch}/>
            <img src={imgTest} onClick={handleTouch}/>
            <img src={imgTest} onClick={handleTouch}/>
        </div>
        </div>
    )
}

export default HomePage;