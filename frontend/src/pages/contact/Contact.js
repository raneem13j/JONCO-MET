import React from "react";
import "./contact.css";
import icon1 from "../../assets/assets/Icons/icons8-envelope-48.png";
import icon2 from "../../assets/assets/Icons/icons8-globe-48.png";
import icon3 from "../../assets/assets/Icons/icons8-location-50.png";
import icon4 from "../../assets/assets/Icons/icons8-phone-48.png";
import icon5 from "../../assets/assets/Icons/icons8-printer-64.png";
import { useState, useRef } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import { MenuBar , Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Contact = () => {
  const [menubar, setMenuBar] = useState(false);
  const storedContactInfo = JSON.parse(localStorage.getItem("contactInfo"));
  
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
  const form = useRef();
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/contacts/`, formData);
      await emailjs.sendForm('service_fyelt3d', 'template_gxa7e27', form.current, 'PiwL_rIX2-s0Sa9oC');
      
        window.location.reload();
    } 
    catch (error) {
      console.error(error);
    }
  };

  
  return (
    <>
       <Navbar setMenuBar={setMenuBar} menubar={menubar} />
      <MenuBar menubar={menubar} /> 
    <div className="ccontact_container">
      <div className="cheader_container">
        <h1 className="cheadline1 cinside">CONTACT</h1>
        <h1 className="cheadline2 cinside">US</h1>
      </div>
      <div className="ccontact_section">
        <div className="cinfo_section">
          <hr className="contact-hr"/>
          <div className="cinfo">
            <div className="cinfo1">
              <div className="cdiv_info">
                <img src={icon3} alt="" className="contact-image" />
                <p className="contact-p">{storedContactInfo?.address || 'No address available'}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon4} alt=""  className="contact-image" />
                <p className="contact-p">{storedContactInfo?.phone1 || 'No phone number available'}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon1} alt="" className="contact-image" />
                <p className="contact-p">{storedContactInfo?.email || 'No email address available'}</p>
              </div>
            </div>
            <div className="cinfo2">
              <div className="cdiv_info">
                <img src={icon1} alt="" className="contact-image" />
                <p className="contact-p">{storedContactInfo?.address2 || 'No address available'}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon5} alt="" className="contact-image" />
                <p className="contact-p">{storedContactInfo?.phone2 || 'No phone number available'}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon2} alt="" className="contact-image" />
                <p className="contact-p">{storedContactInfo?.website || 'No website availble'}</p>
              </div>
            </div>
          </div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                title="location"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=joncomet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://pdflist.com/" alt="pdflist.com">
                Pdflist.com
              </a>
            </div>
          </div>
          <hr className="contact-hr"/>
        </div>

        <form onSubmit={handleSubmit} ref={form} className="cccontact_form-container">
          <hr className="contact-hr" />
          <div>
            <div className="cfirst_name">
              <label>FIRST NAME</label>
              <input
                type="text"
                placeholder="First Name"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label>LAST NAME</label>
              <input
                type=""
                placeholder="Last Name"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div>
            <label>E-MAIL</label>
            <input className="input-email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label>MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="csub_button">
            <button type="submit" className="btn-contact" >SEND MESSAGE</button>
          </div>
          <hr className="contact-hr"/>
        </form>
      </div>
    </div>
    <Footer />
    </>

  );
};

export default Contact;