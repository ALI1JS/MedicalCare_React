   import "./contactus.css";
   import contact from "../../assets/contact.avif";
   import phone from "../../assets/phon.png";
   import email from "../../assets/email.png";
   import location from "../../assets/contactlocation.png";

const Contactus=()=>{
     return(
              <div className="contactus">
                  <div className="container">
                        <div className="row row-custom bg-white">
                              
                               <div className="form-custom col-lg-7 col-sm-12">
                                     <form className="row">
                                     <div className="form-group">
                                         <input type="text" className="p-2 col-12 form-control" placeholder="username"/>
                                    </div>
                                    <div className="form-group">
                                         <input type="email" className="p-2 col-12 form-control" placeholder="email"/>
                                    </div>
                                    <div className="form-group">
                                         <input type="text" className="p-2 col-12 form-control" placeholder="phone number"/>
                                    </div>
                                    <div className="form-group">
                                         <select className="p-2 col-12 form-control" placeholder="choose the department">
                                              <option>department1</option>
                                              <option>department2</option>
                                              <option>department3</option>
                                         </select>
                                    </div>
                                    <div className="form-group">
                                         <textarea className="p-2 col-12 form-control" placeholder="type your message" > </textarea>
                                    </div>
                                    <div className="form-group">
                                         <input  type="submit" className="btn p-3 col-12 form-control"  value="submit"/>
                                    </div>
                                     </form>
                               </div>
                               <div className="image col-lg-5 col-sm-12">
                                    <img className="w-100" src={contact} alt="contactImage"/>
                               </div>
                        </div>
                  </div>
              </div>
     )
}

const ContactFeat=()=>{
    return(
         <div className="feat">
             <div className="container">
                   <div className="row row-custom justify-content-center">
                        <div className="feat2 col-lg-3 col-sm-11 bg-white">
                             <img className="w-25" src={phone} alt="contactphone"/>
                              <h3>Contact Number</h3>
                              <span>+201120450953</span>
                              <span>+201120450953</span>
                        </div>
                        <div className="feat2 col-lg-3 col-sm-11 bg-white">
                             <img className="w-25" src={email} alt="contactemail"/>
                              <h3>Contact Number</h3>
                              <span>+201120450953</span>
                              <span>+201120450953</span>
                        </div>
                        <div className="feat2 col-lg-3 col-sm-11 bg-white">
                             <img className="w-25" src={location} alt="contactlocation"/>
                              <h3>Contact Number</h3>
                              <span>+201120450953</span>
                              <span>+201120450953</span>
                        </div>
                   </div>
             </div>
         </div>
    )
}

export {Contactus,ContactFeat}