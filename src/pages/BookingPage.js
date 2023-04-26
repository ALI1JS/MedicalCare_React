import { Fragment } from "react";
import HomeP from "../Components/Homepage/home";
import { Form } from "../Components/booking/booking";
import "../Components/booking/form.css";
const BookingPage=()=>{
    return(
          <Fragment>
              <HomeP title="booking"/>
              <Form/>
          </Fragment>
    )
}

export default BookingPage;