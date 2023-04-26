import { Fragment } from "react"
import HomeP from "../Components/Homepage/home"
import {Item} from "../Components/Details/details";
import "../Components/Details/details.css"
import { LatestNews } from "../Components/LatestNews/LatestNews";


const FQAPage=()=>{
    return(
        <Fragment>
            <HomeP title="FAQS"/>
            <Items/>
            <LatestNews/>
        </Fragment>
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
        <div className="item-content">
            <div className="container row justify-content-center">
               <div className="item2 col-6">
                  {ItemInfo.map((item)=>
                 <Item Q={item.Q} A={item.A}/>
                  )}
               </div>
                <div className="item2 col-6">
                  {ItemInfo.map((item)=>
                 <Item Q={item.Q} A={item.A}/>
                  )}
               </div>
            </div>
                        
         </div>
    )
}

export default FQAPage;