import { Fragment } from "react"
import HomeP from "../Components/Homepage/home";
import {Details} from "../Components/Details/details";


const DetailsServices=()=>{
    return(
        <Fragment>
             <HomeP title="services details"/>
             <Details/>
        </Fragment>
    )
}

export default DetailsServices;