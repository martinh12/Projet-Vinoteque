import React from 'react';
import {NavLink } from 'react-router-dom';
import "./Accueil.css";


class Accueil extends React.Component {
    render() {
    return(

        <div className= "Home">

        <h2> Une soirée? </h2>
        <h2> Un repas?</h2>
        <h2> Tu ne sais quel vin choisir ?</h2> 
        <h2> N'hesite pas, laisse nous t'aider en seulement 4 questions !</h2>
        
        <button className="quizz">
            <NavLink to="/quizz" activeStyle={{color: "red"}}> GO ! </NavLink>
        </button>
        <br/>
        <button className="random">
            Random
        </button>

        </div>

    )
    }
 }


export default Accueil;