import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

function Footer(props) {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-2 logoLeft">
                        <SocialIcon url="http://facebook.com" bgColor="#fff7ee" />
                    </div>
                    <div className="col-xs-2 logoLeft">
                        <SocialIcon url="http://twitter.com/jaketrent" bgColor="#fff7ee" />
                    </div>
                    <div className="title col-sm-4">
                        <NavLink exact to="/" >Accueil</NavLink> - <NavLink to="/contactform" >Contact</NavLink>
                    </div>
                    <div className="col-xs-2 logoRight">
                        <SocialIcon url="http://pinterest.com" bgColor="#fff7ee" />
                    </div>
                    <div className="col-xs-2 logoRight">
                        <SocialIcon url="http://instagram.com" bgColor="#fff7ee" />
                    </div>
                </div>
                <p>In Vino Veritas - ©Tous droits réservés - 2019</p>
            </div>
        </div>



    );
}

export default Footer;