import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

function Footer(props) {
    return(
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="logo col-sm-4">
                        <img src="vinphone.png" alt="vinphone"></img>
                    </div>
                    <div className="title col-sm-4">
                    <NavLink exact to="/" >Accueil</NavLink> - <NavLink to="/contactform" >Contact</NavLink>
                    </div>
                    <div className="col-sm-4">
                        <div className="text-center">
                            <SocialIcon url="http://facebook.com" bgColor="white" />
                            <SocialIcon url="http://twitter.com/jaketrent" bgColor="white"/>
                            <SocialIcon url="http://pinterest.com" bgColor="white" />
                            <SocialIcon url="http://instagram.com" bgColor="white" />
                        </div>
                    </div>
                </div>
                <p>In Vino Veritas - ©Tous droits réservés - 2019</p>
            </div>   
        </div>
    );
}

export default Footer;