import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./servicesEditForm.css";
import close from "./icons8-close-window-48.png";

const ServicesEditForm = ({ match }) => {
  const { ID } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (ID) => {
      try {
        if (match.params.id) {
          console.log(ID);
          const response = await axios.get(`http://localhost:5000/services/${ID}`);
          setFormData({
            name: response.data.name,
            description: response.data.description,
            image: response.data.image
          });
          setImagePreview(`http://localhost:5000/${response.data.image}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [ID]);

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleImageChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      let formData = new FormData();
      formData.append("image", formData.image);
      formData.append("name", formData.name);
      formData.append("description", formData.description);
      formData.append("id", ID);

      await axios.post("http://localhost:5000/services/update", formData);
      navigate("/services");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="clients-edit-form__container">
      <form onSubmit={handleSubmit}>
        <div className="clients-edit-form__header">
          <img src={close} alt="close" onClick={() => navigate("/services")} />
        </div>
        <div className="clients-edit-form__body">
          <div className="clients-edit-form__form-group">
            <label htmlFor="name">Service Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="clients-edit-form__form-group">
            <label htmlFor="description">Description</label>

              <textarea name="description"
  id="description"
  value={formData.description}
  onChange={handleChange}
  />
  </div>
  <div className="clients-edit-form__form-group">
  <label htmlFor="image">Service Image</label>
<input type="file" name="image" id="image" onChange={handleImageChange} />
{imagePreview && (
<img
             src={imagePreview}
             alt="service"
             className="clients-edit-form__image-preview"
           />
)}
</div>
</div>
<div className="clients-edit-form__footer">
<button type="submit" className="clients-edit-form__submit-button">
Submit
</button>
</div>
</form>
</div>
);
};

export default ServicesEditForm;
             
