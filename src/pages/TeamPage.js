import { Fragment } from "react"
import HomeP from "../Components/Homepage/home";
import BestDoctor from "../Components/bestDoctor/bestdoctor";

const TeamPage=()=>{
    return(
        <Fragment>
            <HomeP title="our team"/>    
             <BestDoctor/> 
        </Fragment>
    )
}

export default TeamPage;