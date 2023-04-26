
import bookimage from "../../assets/book.png";
import bookimagewoman from "../../assets/womanbooking.png";
import location from "../../assets/location.png";
import setting from "../../assets/setting.png";
import chat from "../../assets/chat.png";
import correct from "../../assets/true.png"
import tringle from "../../assets/tringle.png";
import waves from "../../assets/waves.png";

import "./booking.css";
import { useState } from "react";

const Booking=()=>{
    return(
            <div className="book">
                <div className="container">
                          {<Form/>}
                           <div className="images">
                                <img src={bookimage}/>
                                <img className="womanimage" src={bookimagewoman}/>
                                <img className="chat" src={chat}/>
                                <img className="correct" src={correct}/>
                                <img className="location" src={location}/>
                                <img className="setting" src={setting}/>
                                <img className="tringle" src={tringle}/>
                                <img className="waves" src={waves}/>
                           </div>
               </div>
                      
            </div>
    )
}

const Form=()=>{

     const storInfo=[];
     let form=document.querySelector('form');
     const [msgError,setmsgError]=useState([]);

      let Validation=(e)=>{
          e.preventDefault();
         if(form[0].value.toLowerCase()==="select department"){
              setmsgError(['please select the department that you need !']);
         }
         else{
           setmsgError([]);
         }
          if(form[1].value.toLowerCase()==="select doctor"){
             setmsgError(["please select the doctor that you need !"])
         }
         else{
          setmsgError([]);
          }
          if(form[2].value.length!==11){
          setmsgError(["please type the real phone number !"])
        }
        else{
          setmsgError([]);
        }
          if(form[3].value===""){
          setmsgError(["please type your name that you need booking for you"])
        }
        else{
          setmsgError([]);
        }
         if(form[4].value===""){
          setmsgError(["please type the date that you need booking in"])
        }
        else{
          setmsgError([]);
        }
         if(msgError.length>0){
              let ee=document.querySelector('msg');
              console.log(ee);
         }
     }

     return(
          <div className="form">
          <form>
             <h3>Book Appointment</h3>
             <div className="msg"></div>
                 <select className="select1">
                      <option>select department</option>
                      <option>one</option>
                      <option>two</option>
                      <option>three</option>
                 </select>
                 <select className="select2">
                      <option>select doctor</option>
                      <option>one</option>
                      <option>two</option>
                      <option>three</option>
                 </select>
                 <input type="number" placeholder="phone number"/>
                 <input type="text" placeholder="your name"/>
                  <input type="date"/>
                  <input onClick={Validation} className="btn" type="submit" value="Appointment now"/>
          </form>
       </div>
     )

 }


export {Booking,Form};
