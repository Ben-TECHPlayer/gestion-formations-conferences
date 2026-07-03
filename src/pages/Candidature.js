import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../styles/Candidature.css';
import FormulaireCandidature from '../components/FormulaireCandidature';

function Candidature(){
    return(
        <main>
            <div class="panel-candidature-scrollable">
                <article id="panel-candidature">
                    <h1>CANDIDATURE</h1>
                    <div class="candidature-college">
                        <h2>Souhaitez-vous intégrer le collège</h2>
                        <button>Candidater</button>
                    </div>
                    <div class="candidature-lycee">
                        <h2>Souhaitez-vous intégrer le lycée</h2>
                        <button>Candidater</button>
                    </div>
                    <div class="candidature-ecole-de-commerce">
                        <h2>Souhaitez-vous intégrer l'école de commerce</h2>
                        <button>Candidater</button>
                    </div>
                </article>
            </div>
            <div class="formulaire-candidature">
                <FormulaireCandidature/>
            </div>
        </main>
    );
}

export default Candidature;