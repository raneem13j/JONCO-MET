import React from "react";
import { Navbar, MenuBar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import ClientsDashboard from "./pages/dashboard/clients/ClientsDashboard";
import ServicesDashboard from "./pages/dashboard/services/ServicesDashboard";
import ClientsEditForm from "./components/clientsEditForm/clientsEditForm";
import Contactdashboard from "./pages/dashboard/contact/contactdashboard";

import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import ClientsAddForm from "./components/clientsAddForm/clientsAddForm";
import ProjectsDashboard from "./pages/dashboard/projects/ProjectsDashboard";
import { DashboardMenuBar, DashboardNavbar } from "./components/dashboardNavbar/DashboardNavbar";


function App() {
  
  
  const [menubar, setMenuBar] = useState(false);
  useEffect(() =>{
    localStorage.getItem('token')
  },[localStorage.getItem('token'),window.location.href]);
  //it gives me infinite loop without the empty array.


  return (
    <>
     
  <Router>
      
     {/* <DashboardNavbar setMenuBar={setMenuBar} menubar={menubar} />
     <DashboardMenuBar menubar={menubar} />
     
     <Navbar setMenuBar={setMenuBar} menubar={menubar} />
     <MenuBar menubar={menubar} />  */}
   
     
     <Routes>
{/* <div> */}
  
          {localStorage.getItem('token') ? (
          <>
               
          <Route path='/dashboard/contact' element={<Contactdashboard/>} />
          <Route path='/dashboard/clients' element={<ClientsDashboard/>} />
          <Route path='/edit/:ID' element={<ClientsEditForm/>} />
          <Route path='/add' element={<ClientsAddForm/>} />
          <Route path="/dashboard/projects" element={<ProjectsDashboard/>} />
          <Route path="/dashboard/services" element={<ServicesDashboard/>} />
          <Route path="/login" element={<Login/>}/>

          </>)
          : (
          <>

<Route path="/"  element={<Home/>} />
<Route path="/services" element={<Services/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/clients" element={<Clients/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/login" element={<Login/>} />
<Route path="/dashboard" element={ <Dashboard />}/>
          </>)
          }
{/* </div> */}
</Routes>
{/* <Footer /> */}

</Router>


</>

);
}



  

export default App;