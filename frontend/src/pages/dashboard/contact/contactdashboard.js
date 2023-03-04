import React from "react";
import "./contactdashboard.css";
import icon1 from "../../../assets/assets/Icons/icons8-envelope-48.png";
import icon2 from "../../../assets/assets/Icons/icons8-globe-48.png";
import icon3 from "../../../assets/assets/Icons/icons8-location-50.png";
import icon4 from "../../../assets/assets/Icons/icons8-phone-48.png";
import icon5 from "../../../assets/assets/Icons/icons8-printer-64.png";
import edit from "../../../assets/assets/Icons/icons8-create-64.png";
import { useState } from "react";
import { MenuBar, Navbar } from "../../../components/navbar/Navbar";
import { DashboardMenuBar, DashboardNavbar } from "../../../components/dashboardNavbar/DashboardNavbar";
// import axios from "axios";
// import emailjs from '@emailjs/browser';

const Contactdashboard = (props) => {
  const [contactInfo, setContactInfo] = useState(
    
    JSON.parse(localStorage.getItem("contactInfo")) || {
    address: "Jeita-Main Road-Nseir",
    phone1: "+961 9 236 515",
    email: "info@joncomet.com",
    address2: "410 Zouk Mikael-Lebanon",
    phone2: "+961 9 233 515",
    website: "llumar.com",
  });
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [menubar, setMenuBar] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // validate the input fields
    const newErrors = {};
    if (!contactInfo.address) {
      newErrors.address = "Location is required";
    }
    if (!contactInfo.phone1) {
      newErrors.phone1 = "Phone is required";
    }
    if (!contactInfo.email) {
      newErrors.email = "Email is required";
    }
    if (!contactInfo.address2) {
      newErrors.address2 = "Post Mail is required";
    }
    if (!contactInfo.phone2) {
      newErrors.phone2 = "Fax Number is required";
    }
    if (!contactInfo.website) {
      newErrors.website = "Website is required";
    }
    if (Object.keys(newErrors).length === 0) {
      setContactInfo({ ...contactInfo });
      setEditMode(false);
      localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
      props.updateContact(contactInfo);
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: "",
    });
  };

  return (
    <>
    <DashboardNavbar setMenuBar={setMenuBar} menubar={menubar} />
     <DashboardMenuBar menubar={menubar} />
    <div className="ccontact_container">
      <div className="cheader_container">
        <h1 className="cheadline1 cinside">CONTACT</h1>
        <h1 className="cheadline2 cinside">US</h1>
      </div>
      <div className="ccontact_section">
        <div className="cinfo_section">
          <hr className="contact-hr" />

          <div className="cinfo">
            <div className="cinfo1">
              <div className="cdiv_info">
                <img src={icon3} alt="" className="contact-image" />
                <p className="contact-p">{contactInfo.address}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon4} alt="" className="contact-image" />
                <p className="contact-p">{contactInfo.phone1}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon1} alt="" className="contact-image" />
                <p className="contact-p">{contactInfo.email}</p>
              </div>
            </div>
            <div className="cinfo2">
              <div className="cdiv_info">
                <img src={icon1} alt="" className="contact-image" />
                <p className="contact-p">{contactInfo.address2}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon5} alt="" className="contact-image" />
                <p className="contact-p">{contactInfo.phone2}</p>
              </div>
              <div className="cdiv_info">
                <img src={icon2} alt="" className="contact-image" />
                <p className="contact-p">{contactInfo.website}</p>
              </div>
            </div>
          </div>
          {editMode ? (
            <div className="edit-container">
              <input
                type="text"
                placeholder="Location"
                name="address"
                value={contactInfo.address}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                placeholder="Phone"
                name="phone1"
                value={contactInfo.phone1}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={contactInfo.email}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                placeholder="Post Mail"
                name="address2"
                value={contactInfo.address2}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                placeholder="Fax Number"
                name="phone2"
                value={contactInfo.phone2}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                placeholder="Website"
                name="website"
                value={contactInfo.website}
                onChange={handleInputChange}
              ></input>

              <div className="csub_button">
                <button type="submit" onClick={handleSave} className="btn-contact">
                  SAVE
                </button>
              </div>
            </div>
          ) : (
            <div className="button-container">
              <button className="edit-btn" onClick={handleEdit}>
                <img src={edit} className="contact-image" alt="" />
              </button>
            </div>
          )}

          <hr className="contact-hr" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contactdashboard;