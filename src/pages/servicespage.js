import { Fragment } from "react";
import Home from "../Components/Homepage/home";
import Achievement from "../Components/achievment/achieve";
import Features from "../Components/features/feature";
import BestDoctor from "../Components/bestDoctor/bestdoctor";
import {LatestNews} from "../Components/LatestNews/LatestNews";

const ServicesPage=()=>{
    return(
           <Fragment>
              <Home title="Services"/>  
              <Features/>
              <Achievement/>
              <BestDoctor/>
              <LatestNews/>
           </Fragment>
    )

}
export default ServicesPage;
