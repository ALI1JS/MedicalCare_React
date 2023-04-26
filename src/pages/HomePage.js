import { Fragment } from "react";
import Home from "../Components/Home/Home"
import About from "../Components/about/about";
import Work from "../Components/working/working";
import {Booking} from "../Components/booking/booking";
import {LatestNews} from "../Components/LatestNews/LatestNews";
import Sliderinfo from "../Components/doctorinfoslider/sliderinfo";


const HomePage=()=>{
    return (
        <Fragment>
             <Home/>
             <About/>
             <Work/>
             <Booking/>
             <LatestNews/>
        </Fragment>
    )
}

export default HomePage;