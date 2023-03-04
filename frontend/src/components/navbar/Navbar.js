import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Navbar.css";
// import logo from "./JONCO_logo.png";
import logo2 from "./JONCO_logo2.png";
import menu from "./Menu.png";

const Navbar = ({ setMenuBar, menubar }) => {
	// const[appear,disappear]=useState(false);

	// useEffect(() => {
	// if(window.location.pathname === "/login"){
    //   disappear(true);
	// }
	// }, [window.location.pathname])
	return (
		<>

		<div className="navbiggerthing">
			<div className="navnavbar">
				<div>
					<img src={logo2} alt="JoncoMET" className="navnavbar-logo" />
				</div>
				<div className="navnavbar-list">
					<button className="navnavbar-button">
						<Link to="/">Home</Link>
					</button>
					<button className="navnavbar-button">
						<Link to="/services">Services</Link>
					</button>
					<button className="navnavbar-button">
						<Link to="/projects">Projects</Link>
					</button>
					<button className="navnavbar-button">
						<Link to="/clients">Clients</Link>
					</button>
				</div>
				<div className="navnavbar-contact">
					<button className="navcontact-button">
						<Link to="/contact">Contact Us 	<KeyboardArrowRightIcon/></Link>
					</button>
				</div>
				<div className="navnavbar-menu">
					<button className="navmenu-button" id="navmenuButton">
						<img src={menu} alt="menu" className="navmenu" onClick={() => setMenuBar(!menubar)}/>
					</button>
				</div>
			</div>
		</div>
		
		</>
	);
};

const MenuBar = ({ menubar }) => {
	// const[appear,disappear]=useState(false);

	// useEffect(() => {
	// if(window.location.pathname === "/login"){
    //   disappear(true);
	// }
	// }, [window.location.pathname])
	return (
		<>
		<div className={!menubar ? "navhidden_hidden" : "navhidden_show"} menubar>
			<button className="navmenu-menu">
				<Link to="/">Home</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/services">Services</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/projects">Projects</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/clients">Clients</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/contact">Contact Us</Link>
			</button>
		</div>
		
		</>
	);
};
export { Navbar, MenuBar };
