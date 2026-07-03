import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import Header from "./Header";
import '../styles/Home.css';

function Home() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [lienFormulaire, setLienFormulaire] = useState("https://api.web3forms.com/submit")

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

            <form action={lienFormulaire} method="post" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <fieldset>Contactez-nous</fieldset>

                <input type="hidden" name="access_key" value="" />
                <input type="hidden" name="from_name" value="Gestion de formations et conférences"/>
                <input type="hidden" name="redirect" value="https://api.web3forms.com/submit/success"/>

                <input {...register("firstName")} placeholder="Votre nom" required/>
                <input {...register("lastName")} placeholder="Votre prénom" required/>
                <input {...register("email")} placeholder="Votre adresse mail" required/>
                <input {...register("phoneNumber")} placeholder="Votre numéro de téléphone" required/>

                <select {...register("category", { required: true })} required>
                    <option value="">Sélectionnez votre type de demande</option>
                    <option value="A">Formations</option>
                    <option value="B">Conférences</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="Votre message" required/>
                <p>{data}</p>
                <input type="submit" />
            </form>
        </main>
    );
}

export default Home;
