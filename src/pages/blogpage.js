import { Fragment } from "react"
import HomeP from "../Components/Homepage/home"
import { News } from "../Components/LatestNews/LatestNews";
import patient1 from "../assets/patient1.jpg";
import patient2 from "../assets/patient2.jpg";
import patient3 from "../assets/patient3.jpg";
import patient4 from "../assets/patient1.jpg";
import patient5 from "../assets/patient2.jpg";
import patient6 from "../assets/patient3.jpg";
import doctor1 from "../assets/doctor1.jfif";
import doctor2 from "../assets/doctor2.jfif";
import doctor3 from "../assets/doctor3.jfif";
import doctor4 from "../assets/doctor4.jfif";
import doctor5 from "../assets/doctor5.jfif";
import doctor6 from "../assets/doctor6.jfif";
import "../Components/LatestNews/LatestNews.css"


const BlogPage=()=>{
    return(
        <Fragment>
             <HomeP title="blogs"/>
             <Newss/>
        </Fragment>
    )
}

 const Newss=()=>{
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
        },
        {
            patsrc:patient2,
            docsrc:doctor4,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient1,
            docsrc:doctor5,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient3,
            docsrc:doctor6,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient2,
            docsrc:doctor6,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient1,
            docsrc:doctor6,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient3,
            docsrc:doctor6,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient2,
            docsrc:doctor6,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient1,
            docsrc:doctor6,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
        {
            patsrc:patient3,
            docsrc:doctor6,
            docname:"sonar monya",
            date:"20-12-2022",
            details:"why is skin surgeon considerd underrated"
        },
    ]
    return(
        <div className="latestnews">
              <div className="container">
                  <div className="content row justify-content-center">
                    {news.map((ele)=>
                       <News patsrc={ele.patsrc} docsrc={ele.docsrc} docname={ele.docname} date={ele.date} details={ele.docname} /> 
                    ) }
                  </div>
                  <div className="controller">
                       <button>previous</button>
                       <button>1</button>
                       <button>2</button>
                       <button>3</button>
                       <button>next</button>
                  </div>
              </div>
        </div>
    )
 }

export default BlogPage;