import circle from "../../assets/circle3.png";
import waves from "../../assets/waves.png";
import plus from "../../assets/plus.png";

import "./homeabout.css";
import { Link } from "react-router-dom";

const HomeP=(props)=>{
    return(
       <div className="homep">
            <div className="container">
                   <h2>{props.title}</h2>
                   <button><Link to="/"><i class="fa-regular fa-house-heart"></i> Home</Link> / {props.title}</button>
            </div>
            <img className="circle" src={circle}/>
            <img className="waves" src={waves}/>
            <img className="plus" src={plus}/>
       </div>
    )
}

export default HomeP;