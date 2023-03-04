// import React from 'react'
// import { useState } from 'react';
// import { DashboardMenuBar, DashboardNavbar } from '../../components/dashboardNavbar/DashboardNavbar';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ClientsDashboard from './clients/ClientsDashboard';
// import ServicesDashboard from './services/ServicesDashboard';
// import ClientsAddForm from '../../components/clientsAddForm/clientsAddForm';
// import ClientsEditForm from '../../components/clientsEditForm/clientsEditForm';
// import Contactdashboard from './contact/contactdashboard';
// import ProjectsDashboard from './projects/ProjectsDashboard';

// const Dashboard = () => {
// const [menubar, setMenuBar] = useState(false);
// return (
// <>

// <DashboardNavbar setMenuBar={setMenuBar} menubar={menubar} />
// <DashboardMenuBar menubar={menubar} />
// <Route path='/dashboard/contact' component={Contactdashboard} />
// <Route path='/dashboard/clients' component={ClientsDashboard} />
// <Route path='/edit/:ID' component={ClientsEditForm} />
// <Route path='/add' component={ClientsAddForm} />
// <Route path="/dashboard/projects" component={ProjectsDashboard} />
// <Route path="/dashboard/services" component={ServicesDashboard} />
// </>
// )
// }

// export default Dashboard