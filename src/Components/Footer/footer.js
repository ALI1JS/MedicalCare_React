import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import waves from "../../assets/waves.png";
import circle from "../../assets/circle3.png";
import plus from "../../assets/plus.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="webinfo">
          <div className="info">
              <img src={logo} />{" "}
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div>
              <span>contact us</span>
              <h4>01120450953</h4>
            </div>
          </div>
          <Info title="quick links" link1="about us" link2="our team" link3="services" link4="faq" link5="blogs" />
          <Info title="our services" link1="detal care" link2="cardiac clinic" link3="message therpy" link4="cardiology" link5="ambulance services"/>
          <div className="info">
              <h2>subscribe</h2>
              <form>
                  <input type="text"placeholder="your eamil"/>
                  <input type="submit" value="subscibe"/>
                   <div className="social">
                       <ul>
                          <li> <a href="#"><i class="fa-brands fa-facebook"></i></a> </li>
                          <li> <a href="#"><i class="fa-brands fa-linkedin"></i></a> </li>
                          <li> <a href="#"><i class="fa-brands fa-telegram"></i></a> </li>
                          <li> <a href="#"><i class="fa-brands fa-instagram"></i></a> </li>
                       </ul>
                   </div>
              </form>
          </div>
        </div>
        <div className="devinfo">
          <p>
            Copyright © 2022 Design & Developed <strong>ALI.JS</strong>
          </p>
        </div>
        <img className="waves1" src={waves}/>
        <img className="circle" src={circle}/>
        <img className="plus" src={plus}/>
        <img className="waves2" src={waves}/>
      </div>
    </div>
  );
};

const Info = (props) => {
  return (
    <div className="info">
         <h2>{props.title}</h2>
         <ul>
            <li> <Link to="/about">{props.link1}</Link></li>
            <li> <Link to="/team">{props.link2}</Link></li>
            <li> <Link to="/services">{props.link3}</Link></li>
            <li> <Link to="/faq">{props.link4}</Link></li>
            <li> <Link to="/blogs">{props.link5}</Link></li>
         </ul>
    </div>
  );
};


export default Footer;