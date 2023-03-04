import React from "react";
import "./clientsAddForm.css";
import { useState, useRef } from "react";
import axios from "axios";
import close from "./icons8-close-window-48.png";
import { Navigate, useNavigate } from "react-router-dom";

const ClientsAddForm = (props) => {
  const [formData, setFormData] = useState({
    category_name: "",
    client_name: "",
    client_city: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/clients/`, formData);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  // const handleCloseClick = () => {
  //   onClose();
  // };

  return (
    <div className="edit-formform">
      <form onSubmit={handleSubmit} ref={form} className="edit-form-section">
        <div className="edit-form-container">
          <div className="header">
            <h1 className="Rheadline">Add Client</h1>
            <button className="Rclose" onClick={handleClose}>
              <img src={close} alt="" />
            </button>
          </div>
          <div className="cfirst_name">
            <label>Category</label>
            <input
              type="text"
              placeholder="Category"
              name="category_name"
              value={formData.category_name}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Client Name</label>
            <input
              type=""
              placeholder="Client Name"
              name="client_name"
              value={formData.client_name}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Client City</label>
            <input
              type="text"
              placeholder="Client City"
              name="client_city"
              value={formData.client_city}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div className="csub_button">
          <button type="submit" className="btn-contact">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientsAddForm;