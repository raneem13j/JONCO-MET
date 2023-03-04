
import React, { useState, useEffect } from "react"
import Card from "../../components/service/Card"
import axios from "axios"
import '../../App.css'
import '../../components/service/card.css';
import { MenuBar , Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Services() {
const [data, setData] = useState([]);
const [menubar, setMenuBar] = useState(false);


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

const cards = data.map(item => {
return (
<Card
key={item.id}
{...item}
/>
)

})

return (
<>

<Navbar setMenuBar={setMenuBar} menubar={menubar} />
<MenuBar menubar={menubar} />  
<div className="pic1"></div>
<div className="services-header">
<h1 className="services-header__title" style={{color:'white', fontSize:'50px'}}>Our<span style={{color:'#ef4444' , fontSize:'50px'}}>&nbsp;Services</span></h1>
{/* <p className="services-header__description">We offer a wide range of services to meet your needs. Our team of experts is dedicated to providing you with the best possible solutions for your projects.</p> */}
</div>
<div className="services-cards">
{cards}
</div>
<Footer />
</>
)};