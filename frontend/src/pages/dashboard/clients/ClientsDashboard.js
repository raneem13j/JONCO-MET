import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import edit from "../../../assets/assets/Icons/icons8-create-64.png";
import delet from "../../../assets/assets/Icons/icons8-trash-can-64.png";
import add from "../../../assets/assets/Icons/icons8-add-new-64.png";
import "./clientsDashboard.css";
import { MenuBar, Navbar } from "../../../components/navbar/Navbar";
import { DashboardMenuBar, DashboardNavbar } from "../../../components/dashboardNavbar/DashboardNavbar";


const ClientsDashboard = () => {
  const BACK =process.env.REACT_APP_BACK;
  const [data, setData] = useState([]);
  const [openAddForm,CLoseAddForm]=useState(false);
  const url = `${process.env.REACT_APP_API_URL}/clients/`;
  const [menubar, setMenuBar] = useState(false);

  useEffect(() => {
    axios
    .get(url)
    .then(({ data }) => {
      setData(data);
    })
    .catch((error) => {
      console.error(error);
      console.log("An error occurred while fetching data: ", error);
    });
  }, [localStorage.getItem('token')]);


  const categories = {};
  data.forEach((card) => {
    if (!categories[card.category_name]) {
      categories[card.category_name] = [];
    }
    categories[card.category_name].push({
      client_name: card.client_name,
      client_city: card.client_city,
      id: card._id
    });
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this item?");
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

  const categoryKeys = Object.keys(categories);
  return (
    <>
    <DashboardNavbar setMenuBar={setMenuBar} menubar={menubar} />
     <DashboardMenuBar menubar={menubar} />
    <div className="ccclients_container">
      <div className="cchead_container">
        <h1 className="ccheadline1 ccinside">OUR</h1>
        <h1 className="ccheadline2 ccinside">CLIENTS</h1>
      </div>
      <div className="ccsection ccsection_clients">
        {categoryKeys.map((category_name) => (
          <div className="cccard">
            <div className="cccategory">
              <h2 className="cccategory_h">{category_name}</h2>
            </div>
            <div className="ccclients_card">
              {categories[category_name].map(({ client_name, client_city, id }, i) => (
                <ul className="ul" key={id}>
                  <li className="li-cc">
                    {client_name}-
                    <span className="span-cc">{client_city}</span>
                  </li>
                  <div>
                    <button className="btnf">
                      <Link to={`/edit/${id}`}>
                        <img src={edit} alt="" className="edit" />
                      </Link>
                    </button>
                  </div>
                  <div>
                    <button
                      className="btnf"
                      onClick={() => handleDelete(id)}
                    >
                          <img src={delet} alt="" className="edit" />
                        </button>
                        </div>
                      </ul>
                    )
                  )}
                  <Link to={`/add/`}>
                  <img src={add} alt="" className="edit" />
                  </Link>
                </div>
                <div></div>
              </div>
            
          ))}
        </div>
      </div>
      </>
  );
};


export default ClientsDashboard;