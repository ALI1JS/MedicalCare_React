import doctor1 from "../../assets/doctor1.jfif";
import doctor2 from "../../assets/doctor2.jfif";
import doctor3 from "../../assets/doctor3.jfif";
import circle from "../../assets/circle.png";
import waves from "../../assets/waves.png";
import squar from "../../assets/square.png";
import tringle from "../../assets/tringle.png";

import './bestdoctor.css';

const BestDoctor=()=>{
    const info=[
        {
            imgsrc:doctor1,
             name:"Dr. Addition Smith",
             specialist:"Dentist"
        },
        {
            imgsrc:doctor2,
             name:"Dr. Mahfuz Riad",
             specialist:"Chiropractor"
        },
        {
            imgsrc:doctor3,
             name:"Dr. David Benjamin",
             specialist:"Cardiologist"
        }
    ]
   return(
        <div className="bestdoctor">
            <div className="shap">
                  <img src={tringle} alt="circle shap"/>
                  <img src={waves} alt="circle shap"/>
                  <img src={squar} alt="circle shap"/>
                  <img src={circle} alt="circle shap"/>
            </div>
             <div className="container">
                <div className="text row">
                    <h4 className="col-12">our doctor</h4>
                    <h2 className="col-12">Meet Best Doctors</h2>
                </div>
                  <div className="row row-custom">
                      {info.map((doctor)=>
                         <Doctor imgsrc={doctor.imgsrc} name={doctor.name} specialist={doctor.specialist}/>
                      )}
                  </div>
             </div>
        </div>
   )
}

const Doctor=(props)=>{
   return(
        <div className="col-lg-3 col-md-2 col-sm-11 bg-white d-custom">
            <img src={props.imgsrc} alt="doctorImage"/> 
            <h4>{props.name}</h4>
            <span>{props.specialist}</span>
            <ul>
                <li> <a href="#"><i class="fa-brands fa-facebook"></i></a> </li>
                <li> <a href="#"><i class="fa-brands fa-linkedin"></i></a> </li>
                <li> <a href="#"><i class="fa-brands fa-telegram"></i></a> </li>
                <li> <a href="#"><i class="fa-brands fa-instagram"></i></a> </li>   
            </ul>
        </div>
   )
}

export default BestDoctor;
