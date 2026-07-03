import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function FormulaireCandidature(){

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [lienFormulaire, setLienFormulaire] = useState("https://api.web3forms.com/submit")
    
    return(
        <form action="/candidature" method="post" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <fieldset>Objectif Collège</fieldset>

            <input type="hidden" name="access_key" value="" />
            <input type="hidden" name="from_name" value="Gestion de formations et conférences" />
            <input type="hidden" name="redirect" value="https://api.web3forms.com/submit/success" />

            <input {...register("firstName")} placeholder="Votre nom" required />
            <input {...register("lastName")} placeholder="Votre prénom" required />
            <input {...register("email")} placeholder="Votre adresse mail" required />
            <input {...register("phoneNumber")} placeholder="Votre numéro de téléphone" required />

            <select {...register("cursusSouhaite")} placeholder="Votre cursus souhaité" required>
                <option value="">Sélectionnez votre cursus que vous souhaitez postuler</option>
                <option value="A">BAC Général</option>
                <option value="B">BAC STMG</option>
            </select>
            <input type="submit" />
        </form>
    );
}

export default FormulaireCandidature;