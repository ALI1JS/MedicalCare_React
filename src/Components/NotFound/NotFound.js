
import {Link} from "react-router-dom";
import "./notfound.css";

const NotFound=()=>{
   return(
      <div className="notfound">
            <div className="container row">
                <div className="details col-lg-6 col-sm-11">
                   <h2>404</h2>
                  <h3>The Page you were looking for, couldn't be found.</h3>
                   <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                   <div className="btns">
                       <Link to="/">back</Link>
                       <Link to="/">Back to home</Link>
                    </div>
                </div>
            </div>
      </div>
   )
}

export default NotFound;