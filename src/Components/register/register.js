// how to remove component in react
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Login/login.css";

const Register = () => {
  return (
    <div className="login">
      <div className="container row">
             <div className="col-sm-11 col-md-10 col-lg-6">
             <form className="w-100 bg-white row">
           <div className="logo row justify-content-center">
               <img className="col-5" src={logo} alt="logo" />
           </div>
           <div className="form-group">
            <label for="exampleInputPassword1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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
          <button type="submit" className="btn btn-primary col-6">
            Submit
          </button>
          <Link to="/forgetpass" id="forget" className="form-text text-center mt-3 p-10">
             Forgot Password
          </Link>
          <span id="emailHelp" className="form-text text-muted text-center mt-3">
                  have an account?
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

export default Register;
