import React from 'react';
import './CardWine.css'


const CardWine = props => (
      
      <div className= "ContenairWine">
         <img className= "ImageWine" src={props.vin.image}/>
        <h2 className= "titleWine">
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


export default CardWine;