import React from 'react';
import './FicheWin.css'


const FicheWin = props => (
      
      <div className= "ContenairWin">
        <div >
            
         <img className= "ImageWin" src={props.vin.image}/>

        </div>
        <h2 className= "titleWin">
            {props.vin.titel} 
        </h2>
        <div className= "LinkProducer">
            <a href={props.vin.link} > {props.vin.nameLink}</a>
        </div>
        <div className= "Description">

        <p>{props.vin.description}</p>

        </div>
      </div>
)


export default FicheWin;