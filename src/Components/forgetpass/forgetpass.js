// how to remove component in react
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Login/login.css";

const ForfetPass = () => {
  return (
    <div className="login">
      <div className="container row">
             <div className="col-sm-11 col-md-10 col-lg-6">
             <form className="w-100 bg-white row">
           <div className="logo row justify-content-center">
               <img className="col-5" src={logo} alt="logo" />
           </div>
        
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">New Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="new Password"
            />
          </div>
          <button type="submit" className="btn btn-primary col-6">
            Submit
          </button>
          <span id="emailHelp" className="form-text text-muted text-center mt-3">
                 I have already acount?
          </span>
            <Link to="/login" className="btn btn-primary col-6">
               login
          </Link>
        </form>
             </div>
      </div>
    </div>
  );
};

export default ForfetPass;
