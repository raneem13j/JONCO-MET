import React from "react";
import "./projectsDashboard.css";
import delet from "../../../assets/assets/Icons/icons8-trash-can-64.png";
import edit from "../../../assets/assets/Icons/icons8-create-64.png";
import close from "./icons8-close-window-48.png";
import add from "../../../assets/assets/Icons/icons8-add-new-64.png";
import { useEffect, useState,  useRef } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { MenuBar, Navbar } from "../../../components/navbar/Navbar";
import { DashboardMenuBar, DashboardNavbar } from "../../../components/dashboardNavbar/DashboardNavbar";


const ProjectsDashboard = () => {
  const [menubar, setMenuBar] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [data, setData] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/projects/`;
  const {id} = useParams()
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    image: "",
    services: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}`, formData);
      setData([...data, response.data]);
    } 
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirm) {
      return;
    }
    try {
      await axios.delete(`${url}/${id}`);
      setData(data.filter((card) => card._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleEdit = () => {
   
    setEditMode(true);
  };
  
  const handleAdd = () => {
    setAddMode(!addMode);
  };
  
  const handleClose = () => {
    setAddMode(false);
    setEditMode(false);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //         if (match.params.id) {
  //           const response = await axios.get(`${url}/${ID}`);
  //           setFormData(response.data);
            
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //   fetchData();
  // }, [match.params.id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${url}/${id}`, formData);
      const updatedData = data.map((project) =>
        project._id === id ? { ...project, ...formData } : project
      );
      setData(updatedData);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  


  


  return (
    <>
      {/* <Navbar/> */}
      <DashboardNavbar setMenuBar={setMenuBar} menubar={menubar} />
     <DashboardMenuBar menubar={menubar} />
      <div className="head-div">
        <h2>Add new Project</h2>
        <div>
          <button id="add" className="R" onClick={handleAdd} >
            <img src={add} alt="" />
          </button>
        </div>
      </div>
      <div className="projects-section">
        <table className="projects-table">
          <thead>
          <tr className="project-tr">
            <th className="project-th name">Name</th>
            <th className="project-th">Edit</th>
            <th className="project-th">Delete</th>
          </tr>
          </thead>
        {data.map(({title, index}) => ( 
          <tbody key={index}>
          <tr className="project-tr row row1">
            <td className="project-td name1">{title}</td>
            <td className="project-td icon">
              <button className="e-btn" >
                <img src={edit} className="contact-image" alt="" onClick={handleEdit}/>
              </button>
            </td>
            <td className="project-td icon">
              <button className="btn" >
                <img src={delet} alt="" className="edit" onClick={() => handleDelete(data._id)}/>
              </button>
            </td>
          </tr>
          </tbody>
          ))}
        </table>
      </div>
       {editMode && (
         <form  onSubmit={handleUpdate} ref={form} className="edit-section  ">
            <div className="header">
              <h1>Edit Projects</h1>
              <button id="close" className="R" onClick={handleClose } >
                <img src={close} alt="" />
              </button>
            </div>
            <label>Name:</label>
            <input type="text" placeholder="Name" name="title" value={formData.title}
                onChange={handleChange}></input>
            <label>Services:</label>
            <input type="text" placeholder="Services" name="services"value={formData.services}
                onChange={handleChange}></input>
            <label>Images:</label>
            <input type="text" placeholder="Images" name="image"value={formData.image}
                onChange={handleChange}></input>

            <div className="csub_button">
              <button type="submit" className="btn-contact">
                SAVE
              </button>
            </div>
        </form>
       )}
      
       <div>
       {addMode && (
          <form onSubmit={handleSubmit} ref={form} className="edit-section  ">
            <div className="header">
              <h1>Add Projects</h1>
              <button id="close" className="R" onClick={handleClose}>
                <img src={close} alt="" />
              </button>
            </div>
            <label>Name:</label>
            <input type="text" placeholder="Name" name="title"   value={formData.title}
                onChange={handleChange}></input>
            <label>Services:</label>
            <input type="text" placeholder="Services" name="services" value={formData.services}
                onChange={handleChange}></input>
            <label>Images:</label>
            <input type="text" placeholder="Images" name="image" value={formData.image}
                onChange={handleChange}></input>

            <div className="csub_button">
              <button type="submit" className="btn-contact">
                SAVE
              </button>
              <button type="submit" className="btn-contact">
                Upload Images
              </button>
            </div>
          </form>
       )}
        </div>

      {/* <Footer/> */}
    </>
  );
};

export default ProjectsDashboard;