
import "./achieve.css";

const Achieve=()=>{
    const info=[
        {
           count:120,
           title:"years with you",
           details:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore"
        },
        {
            count:400,
            title:"awards",
            details:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore"
         },
         {
            count:500,
            title:"doctors",
            details:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore"
         },
         {
            count:800,
            title:"satisfied client",
            details:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore"
         },
    ]
    return(
        <div className="achiev">
            <div className="container">
                  <div className="row advcontainer">
                      {info.map((ele)=>
                         <Adv count={ele.count} title={ele.title} details={ele.details} />
                      )} 
                  </div>
            </div>
        </div>
    )
}


const Adv=(props)=>{
      return(
        <div className="col-sm-12 col-md-6 col-lg adv align-self-center">
               <h2>{props.count}</h2>
               <h3>{props.title}</h3>
               <p>{props.details}</p>
        </div>
      )  
}

export default Achieve;