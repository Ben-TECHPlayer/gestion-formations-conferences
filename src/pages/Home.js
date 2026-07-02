import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import Header from "./Header";
import '../styles/Home.css';

function Home() {
    // const formulaireContact = () => {
    //     const [name, setName] = useState("");
    //     const [email, setEmail] = useState("");
    //     const [errors, setErrors] = useState({ name: null, email: null });

    //     const onSubmit = () => {
    //         const formData = new FormData(form);
    //         const name = formData.get("name");
    //         const email = formData.get("email");

    //         let errors = { name: null, email: null };

    //         if (!name) errors.name = "Name is required";

    //         if (!email) errors.email = "Email is required";

    //         if (errors.name || errors.email) {
    //             setErrors(errors);
    //             return;
    //         }

    //         alert(name, email);
    //         alert(`Submitted ${name} ${email}`);
    //     };
    // }

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <main className="home-slider-container">
            <div class="panel-formations-scrollable">
                <article id="panel-formations">
                    <div class="formation-item">
                        <div class="formation-title">
                            <h2>BAC STI2D</h2>
                            {/* <img src="./images/lycee-modeste-leroy.png" alt="Lycée Modeste Leroy" class="img-fluid"> */}
                        </div>
                        <p><strong>Période : 2021-2023</strong></p>
                        {/* <p><span style="text-decoration: underline;">Mention assez bien</span> avec la moyenne générale de 12,14/20</p> */}
                        <p><span>Mention assez bien</span> avec la moyenne générale de 12,14/20</p>
                        <p><strong>Certification PIX</strong></p>
                    </div>

                    <div class="formation-item">
                        <div class="formation-title">
                            <h2>BUT Informatique</h2>
                            {/* <img src="./images/iut-orsay.png" alt="IUT d'Orsay - Université Paris-Saclay" class="img-fluid"> */}
                        </div>
                        <p><strong>Période : 2023-2027</strong></p>
                        <p><strong>Certifications LinkedIn :</strong></p>
                        {/* <ul style="margin-top: 0; " class="liste-certifications"> */}
                        <ul>
                            <li><a href="https://www.linkedin.com/learning/certificates/0ba9ca8c66ec19ce0ac2198342b9237fed41325c666016a8be00562dc3a6de9b?trk=share_certificate">Certification Devenir développeur web full-stack</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/28e438c2ee097339b80d2025b4033754ab12d8532b9a19554bcad1e5b622a3f6?trk=share_certificate">Certification Devenir designer web</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/d67bf1a1c431e133671841b91828285162d9f179879eb5d83150ad90cca15211?trk=share_certificate">Certification Devenir développeur d'applications mobiles avec Android</a></li>
                        </ul>
                    </div>

                    <div class="formation-item">
                        <div class="formation-title">
                            <h2>Ecole d'ingénieurs</h2>
                            {/* <img src="./images/iut-orsay.png" alt="IUT d'Orsay - Université Paris-Saclay" class="img-fluid"> */}
                        </div>
                        <p><strong>Période : 2027-2030</strong></p>
                        <p><strong>Certifications LinkedIn :</strong></p>
                        {/* <ul style="margin-top: 0; " class="liste-certifications"> */}
                        <ul>
                            <li><a href="https://www.linkedin.com/learning/certificates/0ba9ca8c66ec19ce0ac2198342b9237fed41325c666016a8be00562dc3a6de9b?trk=share_certificate">Certification Devenir développeur web full-stack</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/28e438c2ee097339b80d2025b4033754ab12d8532b9a19554bcad1e5b622a3f6?trk=share_certificate">Certification Devenir designer web</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/d67bf1a1c431e133671841b91828285162d9f179879eb5d83150ad90cca15211?trk=share_certificate">Certification Devenir développeur d'applications mobiles avec Android</a></li>
                        </ul>
                    </div>
                </article>
            </div>

            <form action={"https://api.web3forms.com/submit"} method="post" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <fieldset>Contactez-nous</fieldset>

                <input type="hidden" name="access_key" value=""/>
                <input type="hidden" name="from_name" value="Gestion de formations et conférences"/>
                <input type="hidden" name="redirect" value="https://api.web3forms.com/submit/success"/>

                <input {...register("firstName")} placeholder="Votre nom" required/>
                <input {...register("lastName")} placeholder="Votre prénom" required/>
                <input {...register("email")} placeholder="Votre adresse mail" required/>
                <input {...register("phoneNumber")} placeholder="Votre numéro de téléphone" required/>

                <select {...register("category", { required: true })} required>
                    <option value="">Select...</option>
                    <option value="A">Formations</option>
                    <option value="B">Conférences</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="Votre message" required/>
                <p>{data}</p>
                <input type="submit" />
            </form>

            {/* <div id="destination-formulaire"> 
                <form action="https://api.web3forms.com/submit" method="post">
                    <!-- On avait mis legend au lieu de fieldset, donc c'était une erreur -->
                    <fieldset>Contactez-nous</fieldset>

                    <input type="hidden" name="access_key" value="">
                    <input type="hidden" name="from_name" value="Gestion de formations et conférences">
                    <input type="hidden" name="redirect" value="https://api.web3forms.com/submit/success">

                    <input type="text" name="last-name" id="nom" placeholder="Votre nom" required>
                    <input type="text" name="first-name" id="prenom" placeholder="Votre prénom" required>
                    <input type="email" name="email" id="mail" placeholder="Votre adresse-mail" required>
                    <input type="tel" name="number-phone" id="numero-telephone" placeholder="Votre numéro de téléphone" required>
                    <textarea name="avis" id="message" rows="6" placeholder="Votre message"></textarea>

                    <input onClick={onSubmit} type="submit" id="envoyer" name="validation" value="Envoyer">
                </form>
            </div> */}
        </main>
    );
}

export default Home;
