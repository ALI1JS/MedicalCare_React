 import patient1 from "../../assets/patient1.jpg";
 import patient2 from "../../assets/patient2.jpg";
 import patient3 from "../../assets/patient3.jpg";
 import doctor1 from "../../assets/doctor1.jfif";
 import doctor2 from "../../assets/doctor2.jfif";
 import doctor3 from "../../assets/doctor3.jfif";
 
 import { Link } from "react-router-dom";

 import "./LatestNews.css";

const LatestNews=()=>{
    const news=[
        {
            patsrc:patient1,
            docsrc:doctor1,
            docname:"joe doe",
            date:"16-1-2023",
            details:"in this hospital there are speicial surgeon"
        },
        {
            patsrc:patient2,
            docsrc:doctor2,
            docname:"pater paker",
            date:"10-1-2023",
            details:"can you get a difflcan prescription online"
        },
        {
            patsrc:patient3,
            docsrc:doctor3,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        }
    ]

    return(
        <div className="latestnews">
              <div className="container">
                  <div className="heading">
                       <h4>Latest News</h4>
                       <h2>Our Latest News</h2>
                  </div>
                  <div className="content row justify-content-center">
                    {news.map((ele)=>
                       <News patsrc={ele.patsrc} docsrc={ele.docsrc} docname={ele.docname} date={ele.date} details={ele.docname} /> 
                    )}
                  </div>
              </div>
        </div>
    )
}

const News=(props)=>{
    return(
        <div className="new col-md-10 col-lg-3">
             <div className="row new2">
                  <img className="col-12 patient" alt="patient" src={props.patsrc}/>
                  <div className="details col-11">
                    <img src={props.docsrc} alt="doctor"/>
                    <span>{props.docname}</span>
                    <span>{props.date}</span>
                  </div>
                  <p className="col-11"> {props.details} </p>
                  <button className="col-7"> <Link to="/blogdetails">read more</Link> </button>
             </div>

        </div>
    )
}

export {LatestNews,News};