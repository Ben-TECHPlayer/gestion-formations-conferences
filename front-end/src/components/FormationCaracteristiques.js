import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../styles/Formations.css';

function FormationCaracteristiques({ selection, setSelection }){

    // const [menuFormationOpen, setMenuFormationOpen] = useState(false);
    // const [ selection, setSelection ] = useState("bouton-resume");

    return(
        <div className="menuFormation">
            <button className={selection === "bouton-resume" ? "active" : ""} onClick={() => setSelection("bouton-resume")}>
                Résumé
            </button>
            <button className={selection === "bouton-programme" ? "active" : ""} onClick={() => setSelection("bouton-programme")}>
                Programme
            </button>
            <button className={selection === "bouton-admission" ? "active" : ""} onClick={() => setSelection("bouton-admission")}>
                Admission
            </button>
        </div>
    );
}

export default FormationCaracteristiques;