import React from 'react';
import UserForm from '../Components/UserForm';
import ContactDetail from '../Components/ContactDetail';
import Footer from '../Components/Footer';
import './contact.css';

function Contact(){
  return (
    <div className="section">
      <div class="image-section">
        <img className="contact-image" src="../images/contact-bg.jpg" alt="contact-image" />
        <div className="centered">
          <span className="image-top">Get in Touch with Us</span>
          <span className="image-heading">Contact us</span>
          <hr className="line" />
          <span class="image-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga
            nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
          </span>
        </div>
      </div>
      <div className="middle-contact-section">
        <ContactDetail icon="phone_iphone"
                       head="Sales Queries"
                       text="1-2392-23928-2" />
        <ContactDetail icon="drafts"
                       head="Career Queries"
                       text="alpar.enterprises@gmail.com" />
        <ContactDetail icon="location_on"
                       head="Location"
                       text="location_link" />
        <ContactDetail icon="email"
                       head="Official Mail"
                       text="abc@gmail.com" />
      </div>
      <div className="bottom-contact-section">
        <UserForm />
      </div>
      <div className="office-address">
        <div className="column">
          <span className="country-name">UK</span>
          <span className="address">Address</span>
        </div>
        <div className="column">
          <span className="country-name">Australia</span>
          <span className="address">Address</span>
        </div>
      </div>
    </div>
  )
}

export default Contact;
