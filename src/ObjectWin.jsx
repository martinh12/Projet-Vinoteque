import React, { Component } from "react";
import FicheWin from './FicheWin';

const vins = [
    {
        image: "https://image.noelshack.com/fichiers/2019/15/2/1554818468-80166674-bouteille-de-vin-vert-isole-sur-fond-transparent.jpg",
        title: "Les Boulais 2014",
        link: "http//.....Chateau Chinon.com",
        nameLink: "Chateau Chinon",
        description: "Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus et tener, quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum, insontium caedibus fecit victoriam luctuosam.",

        RobeDuVin: "Rouge",
        budget: "45",
        plat: "viande rouge",
        caracteristique: "tannique",
        bio: "oui"
    }

];


class ObjectWin extends Component {
    render() {
        return (
            <div >
                {vins.map(vin => (<FicheWin vin={vin} />))}
            </div>
        )
    }
}

export default ObjectWin;
