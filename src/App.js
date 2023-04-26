import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import AboutPage from "./pages/Aboutpage";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import Footer from "./Components/Footer/footer";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import ServicesPage from "./pages/servicespage";
import DetailsServices from "./pages/detailsservicespage";
import BlogPage from "./pages/blogpage";
import DetailsBlogs from "./pages/blogdetails";
import FQAPage from "./pages/FQApage";
import Login from "./Components/Login/Login";
import RegisterPage from "./pages/registerpage";
import ForgetpassPage from "./pages/forgetpasspage";
import ContactusPage from "./pages/contactuspage";



function App() {
  return (
    <div className="App">
        <Header/>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/notfound" element={<NotFoundPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/servdetails" element={<DetailsServices/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/blogdetails" element={<DetailsBlogs/>} />
        <Route path="/faqs" element={<FQAPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/forgetpass" element={<ForgetpassPage/>} />
        <Route path="/contact" element={<ContactusPage/>} />
      </Routes>
       <Footer/>
    </div>
    
  );
}

export default App;
