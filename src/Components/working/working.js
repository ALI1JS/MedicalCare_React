
import "./working.css"

const Work=()=>{
          const info=[
              {
                num:"01",
                title:"Make Appointmnet",
                desc:"It is a long established fact that a reader will be distracted by the readable content of"
              },
              {
                num:"02",
                title:"Take Treatment",
                desc:"It is a long established fact that a reader will be distracted by the readable content of."
              },
              {
                num:"03",
                title:"Registration",
                desc:"It is a long established fact that a reader will be distracted by the readable content of."
              }
          ]

    return (
          <div className="work">
               <div className="container">
                      <h4>Working Process</h4>
                      <h2>How we works?</h2>
                      <div className="row1">
                        {info.map((ele)=>
                        <Work1 num={ele.num} title={ele.title} desc={ele.desc}/> )}
                      </div>
               </div>
          </div>   
    )
}


export default Work;


const Work1=(props)=>{
    return (
        <div className="coll">
            <h3>{props.num}</h3>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
             <button> <a href="#">view more</a> </button>
        </div>
    )
}