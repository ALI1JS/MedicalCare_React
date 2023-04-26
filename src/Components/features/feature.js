import icon1 from "../../assets/icona1.png";
import icon2 from "../../assets/icona2.png";
import icon3 from "../../assets/icona3.png";
import icon4 from "../../assets/icona4.png";
import "./feature.css"

const Features=()=>{
    const info=[
        {
           imgsrc:icon1,
           head:"Emergency",
           desc:"Phasellus venenatis porta rhoncus. Integer et viverra felis."   
        },
        {
            imgsrc:icon2,
            head:"Treatment",
            desc:"Phasellus venenatis porta rhoncus. Integer et viverra felis."   
         },
         {
            imgsrc:icon3,
            head:"Surgery",
            desc:"Phasellus venenatis porta rhoncus. Integer et viverra felis."   
         },
         {
            imgsrc:icon4,
            head:"Diagnostics",
            desc:"Phasellus venenatis porta rhoncus. Integer et viverra felis."   
         },
         {
            imgsrc:icon2,
            head:"Diagnostics",
            desc:"Phasellus venenatis porta rhoncus. Integer et viverra felis."   
         },
         {
            imgsrc:icon1,
            head:"Vaccine",
            desc:"Phasellus venenatis porta rhoncus. Integer et viverra felis."   
         }  
    ]
    
    return(
         <div className="features">
               <div className="container">
                     <div className="row justify-content-center">
                        {info.map((ele)=>
                           <Feature imgsrc={ele.imgsrc} head={ele.head} desc={ele.desc}/>
                        )}
                     </div>   
               </div>
         </div>
    )
}

const Feature=(props)=>{
    return(
          <div className="feature col-md-4 col-sm-11 col-lg-3">
                <img src={props.imgsrc} alt="Emergency car"/>
                <h2 className="mt-4">{props.head}</h2>
                <p>{props.desc}</p>
                <a className="btn fw-bold" href="/services/details">view more</a>
          </div>
    )
}

export default Features;
