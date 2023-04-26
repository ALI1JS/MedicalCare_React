
import pateint from '../../assets/patient1.jpg';
import pdf from '../../assets/pdf.png';
import doc from '../../assets/doc.png';
import "./details.css"
import { useRef, useState } from 'react';

const Details=()=>{
    return(
          <div className="details">
              <div className="container">
                   <div className="row">
                       <Items/>
                       <DoctorFeat/>
                   </div>
              </div>
          </div>
    )
}

const Items=()=>{
     const ItemInfo=[
        {
            Q:"how doctors can ease your pain?",
            A:`Lorem Ipsum is simply dummy text of the 
               printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            Q:"how do i withdraw from a subject?",
            A:`Lorem Ipsum is simply dummy text of the 
               printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            Q:"understande doctor before you foreget?",
            A:`Lorem Ipsum is simply dummy text of the 
               printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            Q:"what type of system do you suport?",
            A:`Lorem Ipsum is simply dummy text of the 
               printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            Q:"we teach you to feel better?",
            A:`Lorem Ipsum is simply dummy text of the 
               printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            Q:"how i can contact you ?",
            A:`Lorem Ipsum is simply dummy text of the 
               printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book.`
        },
     ]
    return(
        <div className="col-right-custom col-lg-7 col-sm-11 bg-white">
                <div className="row">
                    <div className="col-12">
                         <img className='w-100' src={pateint} alt="pateint-image"/>
                         <div className="heading mt-2">
                             <h2>Why Medical Had Been So Popular Till</h2>
                             <p>Lorem Ipsum is simply dummy text of the printing
                                 and typesetting industry. Lorem Ipsum has been the industry's 
                                 standard dummy text ever since the 1500s, when an unknown printer 
                                 took a galley of type and scrambled it to make a type specimen book

                             </p>
                         </div>
                         <div className="feature row mt-3">
                              <div className='col-5 feat-content'>
                                 <div className="feat row">
                                 <i className="col-2 fa-solid fa-check"></i>
                                  <p className='col-10'>Then along come two they</p>
                                 </div>
                                 <div className="feat row">
                                 <i className=" col-2 fa-solid fa-check"></i>
                                  <p className='col-10'>That’s just a little bit more than</p>
                                 </div>
                                 <div className="feat row">
                                 <i className="col-2 fa-solid fa-check"></i>
                                  <p className='col-10'>Standard dummy text ever since</p>
                                 </div>
                                 <div className="feat row">
                                 <i className=" col-2 fa-solid fa-check"></i>
                                  <p className='col-10'>Simply dummy text of the printing</p>
                                 </div>
                                 <div className="feat row">
                                 <i className="col-2 fa-solid fa-check"></i>
                                  <p className='col-10'>Make a type specimen book</p>
                                 </div>
                              </div>  
                              <div className='progress col-6'>
                                  <div className='progress-custom'>
                                       <h2>Advanced Technology</h2>
                                       <div className='outer'>
                                         <div className='inner'></div>
                                       </div>
                                  </div>
                              </div>  
                         </div>
                         <div className="item-head mt-4">
                              <h2>Popular Questions</h2>
                              <p>Standard dummy text ever since the 1500s, when an
                                 unknown printer took a galley 
                                of type and scrambled it to make a type specimen book
                               </p>
                         </div>   
                    </div>
                    <div className="item-content">
                        {ItemInfo.map((item)=>
                           <Item Q={item.Q} A={item.A}/>
                        )}
                    </div>
               </div>           
        </div>
    )
}

const Item=(props)=>{
     
     const ref=useRef();
     const angleref=useRef();
     const headref=useRef();
     const [check,setcheck]=useState(false);

     const handleClick=()=>{
        if(check===false){
            setcheck(true)
            ref.current.style.maxHeight="5000px";
            angleref.current.style.transform="rotate(180deg)";
            headref.current.style.backgroundColor="#f17732";
        }
        else{
            setcheck(false);
           ref.current.style.maxHeight="0px";
           angleref.current.style.transform="rotate(0deg)";
           headref.current.style.backgroundColor="#565acf";
        }

     }


    return(
           <div className="item col-12">
                <h2 onClick={handleClick} ref={headref}>  {props.Q} <i ref={angleref} className="fa-solid fa-angle-down"></i></h2> 
                <p ref={ref}>{props.A}</p>
           </div>


    )
}

const DoctorFeat=()=>{
    return(
       <div className="d-feat col-3">
              <div className='feat'>
                  <div className='text'>
                      <p>engine diagonistics</p>
                      <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='text'>
                      <p>engine diagonistics</p>
                      <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='text'>
                      <p>engine diagonistics</p>
                      <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='text'>
                      <p>engine diagonistics</p>
                      <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='text'>
                      <p>engine diagonistics</p>
                      <i class="fa-solid fa-angle-right"></i>
                  </div>
              </div>
              <div className='download'>
                    <h2>download</h2>
                    <div className='file-download'>
                        <img src={pdf} alt="pdf-file-image-download"/>
                        <div className='text'>
                             <p>downloade our brouchers</p>
                             <span>download</span>
                        </div>
                    </div>

                    <div className='file-download'>
                        <img src={doc} alt="pdf-file-image-download"/>
                        <div className='text'>
                             <p>our company details</p>
                             <span>download</span>
                        </div>
                    </div>
              </div>
       </div> 
    )
}

export  {Details,Item};