import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./DashboardNavbar.css";
// import logo from "./JONCO_logo.png";
import logo2 from "./JONCO_logo2.png";
import menu from "./Menu.png";

const DashboardNavbar = ({ setMenuBar, menubar }) => {
	return (
		<div className="navbiggerthing">
			<div className="navnavbar">
				<div>
					<img src={logo2} alt="JoncoMET" className="navnavbar-logo" />
				</div>
				<div className="navnavbar-list">
					<button className="navnavbar-button">
						<Link to="/dashboard/services">Services</Link>
					</button>
					<button className="navnavbar-button" style={{opacity: 0.6,
  cursor:'not-allowed' }}>
						{/* <Link to="/dashboard/projects" >Projects</Link> */}
						Projects
					</button>
					<button className="navnavbar-button">
						<Link to="/dashboard/clients">Clients</Link>
					</button>
					<button className="navnavbar-button">
                    <Link to="/dashboard/contact">Contact Us</Link>
					</button>
					{/* <button className="navcontact-button">
						<Link to="/dashboard/contact">Contact Us 	<KeyboardArrowRightIcon/></Link>
					</button> */}
				</div>
				<div className="navnavbar-contact logg">

					<button className="navcontact-button colog" onClick={()=>{localStorage.removeItem("token");
				window.location.reload();
				} }>
						<Link to="/">Logout </Link>
					</button>
				</div>
				<div className="navnavbar-menu">
					<button className="navmenu-button" id="navmenuButton">
						<img src={menu} alt="menu" className="navmenu" onClick={() => setMenuBar(!menubar)}/>
					</button>
				</div>
			</div>
		</div>
	);
};

const DashboardMenuBar = ({ menubar }) => {
	return (
		<div className={!menubar ? "navhidden_hidden" : "navhidden_show"} menubar>
			<button className="navmenu-menu">
				{/* <Link to="/admin">Admin</Link> */}
			</button>
			<button className="navmenu-menu">
				<Link to="/dashboard/services">Services</Link>
			</button>
			<button className="navmenu-menu" style={{opacity: 0.6,
  cursor:'not-allowed'}}>
				{/* <Link to="/dashboard/projects">Projects</Link> */}
				Projects
			</button>
			<button className="navmenu-menu">
				<Link to="/dashboard/clients">Clients</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/dashboard/contact">Contact Us</Link>
			</button>
		</div>
	);
};
export { DashboardNavbar, DashboardMenuBar };
