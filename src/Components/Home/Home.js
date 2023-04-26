import  React from "react";
import homeimage from "../../assets/home.png"
import plus from "../../assets/plus.png";
import tringle from "../../assets/tringle.png";
import circle from "../../assets/circle.png";
import waves from "../../assets/waves.png";
import "./Home.css";

const Home=()=>{
    return(
        <div className="home">
            <div className="container">
                 <div className="text">
                    <h5>We Provide All Health Care Solution</h5>
                    <h2>Protect Your Health And Take Care To Of Your Health</h2>
                     <button><a href="#" alt="readbtn">read more</a></button>
                     <img className="plus" src={plus}/>
                     <img className="tringle" src={tringle}/>
                     <img className="circle" src={circle}/>
                 </div>
                 <div className="image">
                    <img src={homeimage} alt="homeimage"/>
                    <img className="waves" src={waves}/>
                 </div>
            </div>
        </div>
    )
}

export default Home;