import React, { useState, useEffect } from "react";
import CardDashboard from "../../../components/service/CardDashboard";
import axios from "axios";

import close from "../../../assets/assets/Icons/icons8-close-window-48.png";
import { useParams } from "react-router-dom";
import { MenuBar, Navbar } from "../../../components/navbar/Navbar";
import { DashboardMenuBar, DashboardNavbar } from "../../../components/dashboardNavbar/DashboardNavbar";

// import { Navbar } from "../../../components/navbar/Navbar"
// import Footer from "../../../components/footer/Footer"
// import Modal from "../../../components/modal/Modal";

export default function ServicesDashboard() {
  const [menubar, setMenuBar] = useState(false);
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const {ID} = useParams()
  const [selectedService, setSelectedService] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/services`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (service) => {
    setSelectedService(service);

    setEditMode(true);
  };
  const handleClose = () => {
    setEditMode(false);
  };

    const handleInputChange = (event) => {
      setSelectedService({
          ...selectedService,
          [event.target.name]: event.target.value
      });
  };
  const handleSave = async (event, id) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const image = formData.get("image");
    const updatedService = {
      title: formData.get("title"),
      description: formData.get("description"),
      
    };
   
    formData.append("id", selectedService.id);
    formData.append("image", image);
  
    const response = await axios
    .put(`${process.env.REACT_APP_API_URL}/services/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(() => {
      const updatedData = data.map((service) => {
        if (service.id === selectedService.id) {
          return { ...service, ...updatedService };
        }
        return service;
      });
      setData(updatedData);

      setEditMode(false);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};

  const cards = data.map((item) => {
    return (
      <CardDashboard key={item.id} {...item} onEdit={() => handleEdit(item)} />
    );
  });

  return (
    <>
      {/* <Navbar/> */}
      <DashboardNavbar setMenuBar={setMenuBar} menubar={menubar} />
     <DashboardMenuBar menubar={menubar} />

      <div className="services-header">
        <h1
          className="services-header__title"
          style={{ color: "white", fontSize: "50px" }}
        >
          Our
          <span style={{ color: "#ef4444", fontSize: "50px" }}>
            &nbsp;Services
          </span>
        </h1>
        {/* <p className="services-header__description">We offer a wide range of services to meet your needs. Our team of experts is dedicated to providing you with the best possible solutions for your projects.</p> */}
      </div>
      <div className="services-cards">{cards}</div>
      {editMode && (
        <div className="raneem">
          <form onSubmit={handleSave} className="eedit-form-section">
            <div className="eedit-form-container">
              <div className="eheader">
                <h1 className="RRheadline">Edit Projects</h1>
                <button className="Rclose" onClick={handleClose}>
                  <img src={close} alt="" />
                </button>
              </div>
              <div className="cfirst_name">
                <label>Service</label>
                <input type="text" placeholder="Services" name="title"  value={selectedService.title}
               onChange={handleInputChange}></input>
              </div>
              <div className="cfirst_name">
                <label>Description</label>
                <textarea
                  name="description"
                  className="text-modal"
                  placeholder="Description"
                  value={selectedService.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="cfirst_name">
                <label>image</label>
                <input type="file" placeholder="Change Image" name="image" 
                 
               onChange={handleInputChange}
               ></input>
              </div>
              <div className="csub_button">
                <button type="submit" className="btn-contact">
                  EDIT
                </button>
                <button type="submit" className="btn-contact">
                  upload
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* <Footer/> */}
    </>
  );
}