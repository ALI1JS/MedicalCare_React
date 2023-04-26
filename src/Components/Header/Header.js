import { Navbar,Container,Nav,NavDropdown, } from "react-bootstrap"; 
import logo from "../../assets/logo.png";
import "./header.css"
import { Link } from "react-router-dom";

const Header=()=>{
  
    return (
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
               <img src={logo} alt="logoImage"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="active">Home</Link>
              {/* dropdwon  for pages */}
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <Link to="/about">about us</Link>
                <Link to="/team">our team</Link>
                <Link to="/faqs">faqs</Link>
                <Link to="/booking">booking</Link>
                <Link to="/notfound">error 404</Link>
                <Link to="/login">login/register</Link>
              </NavDropdown>
             {/* drop downs for services */}
              <NavDropdown className="dropdownlink" title="Services" id="basic-nav-dropdown">
                <Link to="/services">services</Link>
                <Link to="/servdetails">services details </Link>
              </NavDropdown>

              {/* Blogs dropdwon */}
              <NavDropdown title="Blogs" id="basic-nav-dropdown">
                <Link to="/blog">Blogs</Link>
                <Link to="/blogdetails">Blogs details </Link>
              </NavDropdown>
              <Link to="/contact">Contact us</Link>
              <Nav.Link>
                   <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </Nav.Link>
              <Nav.Link>
                <i class="fa-solid fa-phone"></i>
             </Nav.Link>
              <Nav.Link> (+20)1120450953</Nav.Link>
              <Nav.Link>
                 <button>contact us</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
     
}

export default Header;