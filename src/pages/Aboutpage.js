import { Fragment } from "react";
import About from "../Components/about/about";
import HomeP from "../Components/Homepage/home";
import {LatestNews} from "../Components/LatestNews/LatestNews";
import Achieve from "../Components/achievment/achieve";
import BestDoctor from "../Components/bestDoctor/bestdoctor";



const AboutPage=()=>{
    return (
        <Fragment>
            <HomeP title="about us"/>
            <About/>
            <Achieve/>
            <BestDoctor/>
            <LatestNews/>
        </Fragment>
    )
}

export default AboutPage;