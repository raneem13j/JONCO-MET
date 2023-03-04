import React from "react";
import "./clientsEditForm.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import close from "./icons8-close-window-48.png";
import { useNavigate, useParams } from "react-router-dom";


const ClientsEditForm = ({ match }) => {
  console.log(match,"hjgfdxfghjkl");
  const {ID} = useParams();
  const [formData, setFormData] = useState({
    category_name: "",
    client_name: "",
    client_city: "",
  });


  useEffect(() => {
    const fetchData = async () => {
        try {
          if (match.params.id) {
            
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/clients/${ID}`);
            setFormData(response.data);
            
          }
        } catch (error) {
          console.error(error);
        }
      };
    fetchData();
  }, [match.params.id]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    
  };

  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log(ID);
    console.log(event.target);
    event.preventDefault();
    if (!ID) {
      console.error("No client id found");
      return;
      
    }
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/clients/${ID}`, formData);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };
   
  // const handleClose = () => {
  //   history.goBack();
  // };

 
  return (
    <div  className="edit-formform">
      <form onSubmit={handleSubmit} ref={form} className="edit-form-section">
        <div className="edit-form-container">
          <div className="header">
            <h1 className="Rheadline">Edit Clients</h1>
            <button className="Rclose"  >
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
          <div className="cfirst_name">
            <label>Client Name</label>
            <input
              type=""
              placeholder="Cli
              ent Name"
              name="client_name"
              value={formData.client_name}
              onChange={handleChange}
              
            ></input>
          </div>
        <div className="cfirst_name">
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
            EDIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientsEditForm;