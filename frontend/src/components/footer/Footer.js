import React from "react";
import { Link } from "react-router-dom";
import logo from "./JONCO_logo.png";
import "./Footer.css";
let FBurl = 'https://www.facebook.com/LLumarWindowFilm/'
let INurl = 'https://www.instagram.com/jonco.trading/?igshid=YmMyMTA2M2Y%3D'
let Turl = 'https://twitter.com/llumarfilms?lang=en'

const Footer = () => {
    return (
        <div className="footfooter">
            <div className="footfirstBig">
                <div className="footfirstSmall">
                    <div className="footlogo">
                        <button className="footlogo-button">
                            <Link to="/">
                                <img src={logo} alt="logo-pic" className="footlogo-pic"/>
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="footsecondSmall">
                    <div className="footres-div">
                        <div className="footres">RESOURCES</div>
                        <div className="footHSCPC">
                            <ul className="footallul">
                                <li className="footroutes">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="footroutes">
                                    <Link to="/services">Services</Link>
                                </li>
                                <li className="footroutes">
                                    <Link to="/clients">Clients</Link>
                                </li>
                                <li className="footroutes">
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li className="footroutes-contact">
                                    <Link to="/contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footfus-div">
                        <div className="footfus">FOLLOW US</div>
                            <div className="footSocials">
                                <ul className="footallul">
                                    <li className="footSocial-FI">
                                        <a href="https://www.facebook.com/LLumarWindowFilm/" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    </li>
                                    <li className="footSocial-FI">
                                        <a href="https://www.instagram.com/jonco.trading/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </li>
                                    <li className="footSocial-T">
                                        <a href="https://twitter.com/llumarfilms?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                    </div>

                    <div className="footlegal-div">
                        <div className="footlegal">LEGAL</div>
                            <div className="footPPTC">
                                <ul className="footallul">
                                    <li className="footPP">
                                        <a href="https://www.eastman.com/privacy/pages/policy.aspx" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                                    </li>
                                    <li className="footTC">
                                        <a href="https://www.eastman.com/Pages/Legal_Information.aspx" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                    </div>

                </div>

            </div>


            <div className="footline"></div>


            <div className="footsecondBig">
                <div className="footrights">
                &#169;	2023 &nbsp; <div className="footbold">JONCO M.E. Trading</div>. All Rights Reserved.
                </div>
                <div className="footS-icons">
                    <button className="footBTFB" onClick={() => { window.open(FBurl, "_blank"); } }></button>
                    <button className="footBTIN" onClick={() => { window.open(INurl, "_blank"); } }></button>
                    <button className="footBTT" onClick={() => { window.open(Turl, "_blank"); } }></button>
                </div>
            </div>
        </div>
    )
}

export default Footer;