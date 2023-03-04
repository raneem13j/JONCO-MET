import './projects.css';
import React, { useState, useEffect } from 'react';
import Hero from '../../components/project/Hero';
import Nav from '../../components/project/Nav';
import Card from '../../components/project/Card';
import Modal from '../../components//project/Pop';
import { MenuBar , Navbar } from '../../components/navbar/Navbar';
import axios from 'axios';
import Footer from '../../components/footer/Footer';
// fetching with fake data
// import Data from '../../components/data' 


function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedModalImage, setSelectedModalImage] = useState(null);
  const [menubar, setMenuBar] = useState(false);

//fetching with fake data
// const myData = Data.filter((item) => {
//   return (item.type === selectedCategory || selectedCategory === 'All'
//   );
// })
//   .map((item) => {
//     return <Card 
//     key={item._id}
//     image={item.image}
//     title={item.title}
//     type={item.type}
//     modalimg={item.modalimg}
//     onClick={() => openModal(item.title,item.modalimg)} />

//   });
  const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/projects`,
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);


  const filteredCards = projects.filter((item) => {
    return (item.type === selectedCategory || selectedCategory === 'All');
  });
const cards = filteredCards.map((item) => {
  
  return (
    <Card
      key={item._id}
      image={item.image}
      title={item.title}
      type={item.type}
      modalimg={item.services}
      onClick={() => openModal(item.title, item.services)}
    />
  );
});
const openModal = (title, services) => {
  console.log(services)
  setSelectedItem(title);
  setSelectedModalImage(services);
  setShowModal((prev) => !prev);
};

  return (
    <>
    
<Navbar setMenuBar={setMenuBar} menubar={menubar} />
      <MenuBar menubar={menubar} /> 
    <div className="pApp" style={{backgroundColor: "#EAE8ED"}}>
      <Hero />
      <Nav handleSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <section className="pcards-list">{cards}</section>
      {showModal && (
        <Modal
          title={selectedItem}
          modalimg={selectedModalImage}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
    <Footer />
    </>
  );
}

export default Projects;