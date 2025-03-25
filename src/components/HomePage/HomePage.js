import React from "react";
import imgTest from "../../images/test-tube-svgrepo-com.png";
import './HomePage.css';

const HomePage = ()=>{
    const handleTouch = ()=>{
        alert('Touch Event Detected');
    }
    return (
        <div className="container">
            <h1>Bem vindo(a) Mariana </h1>

        <div>
            <div className="menu">
            <img src={imgTest} onClick={handleTouch}/>
            <label>Calendário</label>
            </div>
            <div className="menu">
            <img src={imgTest} onClick={handleTouch}/>
            <label>Pacientes</label>
            </div>
            <div className="menu">
            <img src={imgTest} onClick={handleTouch}/>
            <label>Anamneses</label>
            </div>
        </div>
        <div>
            <div className="menu">
            <img src={imgTest} onClick={handleTouch}/>
            <label>Prontuários</label>
            </div>
            <div className="menu">
            <img src={imgTest} onClick={handleTouch}/>
            <label>Financerio</label>
            </div>
            <div className="menu">
            <img src={imgTest} onClick={handleTouch}/>
            <label> Logout </label>
            </div>
        </div>
        </div>
    )
}

export default HomePage;