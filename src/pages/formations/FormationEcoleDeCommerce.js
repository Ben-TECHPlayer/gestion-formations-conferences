import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../../styles/formations/FormationEcoleDeCommerce.css';

function FormationEcoleDeCommerce(){

    const [menuFormationOpen, setMenuFormationOpen] = useState(false);

    return(
        <main>
            <div className={`menuFormation ${menuFormationOpen ? "show" : ""}`}>
                <NavLink to="/formations/formation-college" className={({ isActive }) => isActive ? "active" : ""}>
                    Résumé
                </NavLink>
                <NavLink to="/formations/formation-college" className={({ isActive }) => isActive ? "active" : ""}>
                    Pourquoi ce cursus ?
                </NavLink>
                <NavLink to="/formations/formation-college" className={({ isActive }) => isActive ? "active" : ""}>
                    Admission
                </NavLink>
            </div>

            <h1>
                Les avantages pour les collégiens
            </h1>
            <p></p>
        </main>
    );
}

export default FormationEcoleDeCommerce;