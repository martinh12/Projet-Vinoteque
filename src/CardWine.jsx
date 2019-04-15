import React from 'react';
import './CardWine.css'


const CardWine = props => (
      
      <div className= "CardWine">
         <img className= "imageWine" src={props.vin.image}/>
        <h2 className= "titleWine">
            {props.vin.titel} 
        </h2>
        <div className= "linkProducer">
            <a href={props.vin.link} > {props.vin.nameLink}</a>
        </div>
        <div className= "description">
            <p>{props.vin.description}</p>
        </div>
      </div>
)


export default CardWine;