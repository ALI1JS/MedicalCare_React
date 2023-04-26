import about from "../../assets/about.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import icona1 from "../../assets/icona1.png";
import icona2 from "../../assets/icona2.png";
import icona3 from "../../assets/icona3.png";
import icona4 from "../../assets/icona4.png";
import square from "../../assets/square.png";
import square2 from "../../assets/square2.png";
import waves from "../../assets/waves.png";
import "./about.css"

const About=()=>{
    return(
        <div className="about">
            <div className="container">
                <div className="row myrow">
                    <div className="col-lg-6 col-sm-12 col1">
                         <div className="row myrow2">
                         <img  className="col-6 align-self-end img1 " src={about2}/>
                         <img className="col-6 img2" src={about}/>
                         <img className="col-6 img3" src={about3}/>
                          <div className="col-4 align-self-end exper">
                            <h2>20</h2>
                             <h4>Year Experience</h4>
                          </div>
                         </div>
                         <img className="square" src={square}/>
                         <img className="waves" src={waves}/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col22">
                        <div className="row row21">
                            <h4 className="col-12">about us</h4>
                             <h2 className="col-12">The Great Place Of Medical Hospital Center</h2>
                             <p className="col-12">We provide the special tips and advice’s of heath care treatment and 
                             high level of best technology involve in the our hospital.
                             </p>
                             <div className="col-12 featcol">
                                <div className="row featrow">
                                    <div className="col-lg-5 col-sm-11 col1">
                                        <img src={icona1}/>
                                         <span>Emergency Help</span>
                                    </div>
                                    <div className="col-lg-5 col-sm-11 col2">
                                        <img src={icona2}/>
                                         <span>Qualified Doctors</span>
                                    </div>
                                    <div className="col-lg-5 col-sm-11 col3">
                                        <img src={icona3}/>
                                         <span> Best Professionals</span>
                                    </div>
                                    <div className="col-lg-5 col-sm-11 col4">
                                        <img src={icona4}/>
                                         <span>Medical Treatment</span>
                                    </div>
                                   
                                </div>
                             </div>
                             <button className="col-3"><a href="#">read more</a></button>
                        </div>
                          <img className="square2" src={square}/>
                          <img className="square3" src={square2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;