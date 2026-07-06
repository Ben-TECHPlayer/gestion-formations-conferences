import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import Header from "./Header";
import '../styles/Home.css';

function Home() {
    const [result, setResult] = useState("");

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres
        return digits.replace(/(\d{2})(?=\d)/g, "$1 ");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("En cours d'envoi....");
        const formData = new FormData(event.target);
        formData.append("access_key", "a30bc28f-59e6-4782-9ced-0814c617ec56");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Votre demande est transmise.");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };


    return (
        <main>
            <div class="panel-accueil-scrollable">
                <article id="panel-accueil">
                    <div class="accueil-item">
                        <div class="accueil-image">
                            <img src={`${process.env.PUBLIC_URL}/assets/college-madrid.png`} alt="Formations" />
                        </div>
                        <div class="accueil-titre">
                            <h2>Formations</h2>
                        </div>
                    </div>

                    <div class="accueil-item">
                        <div class="accueil-image">
                            <img src={`${process.env.PUBLIC_URL}/assets/conference.png`} alt="Conférences" />
                        </div>
                        <div class="accueil-titre">
                            <h2>Conférences</h2>
                        </div>
                    </div>
                </article>
            </div>

            <form onSubmit={onSubmit}>
                <fieldset>Contactez-nous</fieldset>

                <input type="text" name="lastName" placeholder="Votre nom" required />
                <input type="text" name="firstName" placeholder="Votre prénom" required />
                <input type="email" name="email" placeholder="Votre adresse mail" required/>
                <input type="tel" name="phoneNumber" placeholder="Votre numéro de téléphone" required onChange={(e) => {e.target.value = formatPhone(e.target.value); }}/>

                <select name="requestType" required>
                    <option value="">Sélectionnez votre type de demande</option>
                    <option value="A">Formations</option>
                    <option value="B">Conférences</option>
                </select>
                <textarea name="message" placeholder="Votre message" required/>
                <input type="submit" value={"Envoyer votre demande"} />
            </form>
        </main>
    );
}

export default Home;
