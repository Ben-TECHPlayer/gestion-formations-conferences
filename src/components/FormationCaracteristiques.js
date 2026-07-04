import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../styles/Formations.css';

function FormationCaracteristiques(){

    const [menuFormationOpen, setMenuFormationOpen] = useState(false);

    return(
        <div className={`menuFormation ${menuFormationOpen ? "show" : ""}`}>
            <NavLink to="/formations/formation-lycee" className={({ isActive }) => isActive ? "active" : ""}>
                Résumé
            </NavLink>
            <NavLink to="/formations/formation-lycee" className={({ isActive }) => isActive ? "active" : ""}>
                Programme
            </NavLink>
            <NavLink to="/formations/formation-lycee" className={({ isActive }) => isActive ? "active" : ""}>
                Admission
            </NavLink>
        </div>
    );
}

export default FormationCaracteristiques;