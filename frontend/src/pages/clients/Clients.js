// import { render } from "@testing-library/react";
import "./clients.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuBar , Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import { trusted } from "mongoose";

const Clients = () => {
  const [menubar, setMenuBar] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/clients/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const categories = [];
  data.forEach((card) => {
    if (!categories[card.category_name]) {
      categories[card.category_name] = [];
    }
    categories[card.category_name].push({
      client_name: card.client_name,
      client_city: card.client_city,
    });
  });

  return (
    <>
      <Navbar setMenuBar={setMenuBar} menubar={menubar} />
      <MenuBar menubar={menubar} /> 
      <div className="cclients_container">
        <div className="chead_container">
          <h1 className="cheadline1 cinside"style={{color:'white' , fontSize:'50px', fontWeight:'bold'}}>OUR <span style={{color:'#ef4444' , fontSize:'50px', fontWeight:'bold'}}>CLIENTS</span></h1>
          {/* <h1 className="cheadline2 cinside">CLIENTS</h1> */}
        </div>
        <div className="csection csection_clients">
          {Object.keys(categories).map((category_name) => (
            <>
              <div className="ccard">
                <div className="ccategory">
                  <h2 className="ccategory_h">{category_name}</h2>
                </div>
                <div className="cclients_card">
                  {categories[category_name].map(
                    ({ client_name, client_city, index }) => (
                      <ul key={index}>
                        <li className="li-c" >{client_name}-<span className="span-c">{client_city}</span></li>
                      </ul>
                    )
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clients;