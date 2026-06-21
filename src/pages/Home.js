import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    // const [currentSlide, setCurrentSlide] = useState(0);

    // // Préparer les slides
    // const slides = [
    //     {
    //         id: 1,
    //         type: "season-trends",
    //         title: "BUBLIK SEASON",
    //         subtitle: "MARCH 28-APRIL 20",
    //         bgClass: "bg-season"
    //     },
    //     {
    //         id: 2,
    //         type: "grand-tour",
    //         title: "LEGENDS OPEN",
    //         subtitle: "APRIL 13-MAY 11",
    //         link: "/games",
    //         cta: "Go to play!!!",
    //         bgClass: "bg-tour",
    //     },
    //     {
    //         id: 3,
    //         type: "new-legend-trends",
    //         title: "BUBLIK IS HERE!!!",
    //         cta: "Go to play with Bublik!!!",
    //         bgClass: "bg-new-legend"
    //     },
    //     {
    //         id: 4,
    //         type: "tournament",
    //         title: "INTERNAZIONALI BNL D'ITALIA!",
    //         subtitle: "APRIL 16-21",
    //         cta: "Win this tournament and go to ESports Tournament Roma Open in May",
    //         link: "/games",
    //         bgClass: "bg-tournament"
    //     },
    //     {
    //         id: 5,
    //         type: "legends",
    //         title: "LEGENDS ARE HERE!!!",
    //         subtitle: "GO TO MEET OSAKA, KYRGIOS, AND MORE...",
    //         cta: "Go to Card Database",
    //         link: "/card",
    //         bgClass: "bg-legends"
    //     },
    //     {
    //         id: 6,
    //         type: "champions",
    //         title: "The champions are here!!!",
    //         subtitle: "GO TO PLAY ",
    //         cta: "Go to it!!!",
    //         link: "/card",
    //         bgClass: "bg-champions"
    //     },
    // ];

    // // Mettre en place le chargement automatique du slide
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    //     }, 5000); // 5 secondes
    //     return () => clearInterval(timer);
    // }, [slides.length]);

    // // Donner la possibilité aux utilisateurs de naviguer manuellement
    // const nextSlide = () => {
    //     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    // };
    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    // };

    return (
        <main className="home-slider-container">
            
        </main>
    );
}

export default Home;
