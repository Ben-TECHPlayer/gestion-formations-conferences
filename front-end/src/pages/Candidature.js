import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../styles/Candidature.css';
import FormulaireCandidatureCollege from '../components/formulaire-candidature/FormulaireCandidatureCollege';
import FormulaireCandidatureLycee from '../components/formulaire-candidature/FormulaireCandidatureLycee';
import FormulaireCandidatureEcoleDeCommerce from '../components/formulaire-candidature/FormulaireCandidatureEcoleDeCommerce';

function Candidature(){

    const [cursus, setCursus] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#formulaire-candidature-college") {
            const element = document.getElementById("formulaire-candidature-college");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else if (location.hash === "#formulaire-candidature-lycee") {
            const element = document.getElementById("formulaire-candidature-lycee");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else if (location.hash === "#formulaire-candidature-ecole-de-commerce") {
            const element = document.getElementById("formulaire-candidature-ecole-de-commerce");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return(
        <main>
            <div class="panel-candidature-scrollable">
                <article id="panel-candidature">
                    <h1>CANDIDATURE</h1>
                    <div className="panel-candidature-container">
                        <div class="candidature-college">
                            <h2>Souhaitez-vous intégrer le collège</h2>
                            <Link to="/candidature/#formulaire-candidature-college">
                                <button onClick={() => setCursus("bouton-candidature-college")}>
                                    Candidater
                                </button>
                            </Link>
                        </div>
                        <div class="candidature-lycee">
                            <h2>Souhaitez-vous intégrer le lycée</h2>
                            <Link to="/candidature/#formulaire-candidature-lycee">
                                <button onClick={() => setCursus("bouton-candidature-lycee")}>
                                    Candidater
                                </button>
                            </Link>
                        </div>
                        <div class="candidature-ecole-de-commerce">
                            <h2>Souhaitez-vous intégrer l'école de commerce</h2>
                            <Link to="/candidature/#formulaire-candidature-ecole-de-commerce">
                                <button onClick={() => setCursus("bouton-candidature-ecole-de-commerce")}>
                                    Candidater
                                </button>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
            {/* 
            <div class="formulaire-candidature">
                <FormulaireCandidature/>
            </div> 
            */}
            {cursus === "bouton-candidature-college" && ( <FormulaireCandidatureCollege/> )}
            {cursus === "bouton-candidature-lycee" && ( <FormulaireCandidatureLycee/> )}
            {cursus === "bouton-candidature-ecole-de-commerce" && ( <FormulaireCandidatureEcoleDeCommerce/> )}
        </main>
    );
}

export default Candidature;