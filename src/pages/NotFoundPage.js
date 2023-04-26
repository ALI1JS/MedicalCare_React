import { Fragment } from "react"
import NotFound from "../Components/NotFound/NotFound"
import HomeP from "../Components/Homepage/home";



const NotFoundPage=()=>{
    return(
          <Fragment>
                 <HomeP title="page not found"/>
                <NotFound/>
          </Fragment>
    )
}

export default NotFoundPage;