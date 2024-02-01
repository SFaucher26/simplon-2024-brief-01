import React from 'react';
import '../design/Cards.css';



export default function Pricing() {
    return (
        <section id="prices" className="prices">
            <h2>Nos abonnements</h2>
            <div className="abonnements">
            <div className="abonnement">
                <h3>STARTER</h3>
                <p>Nom de domaine gratuit</p>
                <p>Migration assistée</p>
                <p><strong>2,50 € / mois </strong></p>
                <button className="btn">Commander </button>
            </div>
            <div className="abonnement" >
                <h3>CONFORT</h3>
                <p>Nom de domaine gratuit</p>
                <p>Migration assistée</p>
                <p>Assistance 24/24 - 7/7</p>
                <p><strong>10€ / mois</strong></p>
                <button className="btn">Commander </button>
            </div>
            <div className="abonnement">
                <h3>PREMIUM</h3>
                <p>Nom de domaine + SSL gratuit </p>
                <p>Migration assistée</p>
                <p>Assistance 24/24 - 7/7</p>
                <p ><strong>15€ / mois </strong></p>
                <button className="btn">Commander </button>
            </div>
            </div>
        </section>
    )

    

}