import React from "react";
import "./Footer.css"
import { NavLink } from 'react-router-dom';



const Footer = () => (

    <div className="Footer row">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>


        <div className="col-3">
            <button className= "home">
            <NavLink exact to="/" activeStyle={{color: "red"}}> Acceuil </NavLink>
            </button>
            <br/>
            <button className= "contact">
            <NavLink to="/contactform" activeStyle={{color: "red"}}> Contactez nous </NavLink>
            </button>
        </div>
        <div className="col-7 col-xs-0"></div>       
            <a className= "col-1" href="https://www.facebook.com/" target="_blank" ><button type="button" className="faceBook"><i class="fab fa-facebook-f"></i></button></a>
            
            <a className= "col-1" href="https://twitter.com/login?lang=fr" target="_blank"> <button type="button" className="twitter" ><i class="fab fa-twitter"></i></button></a>
    </div>


)


export default Footer;