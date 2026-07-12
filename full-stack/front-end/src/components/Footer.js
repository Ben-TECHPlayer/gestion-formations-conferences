import React from 'react';

function Footer() {
    return (
    <footer>
        <div class="droits-auteur">
            <p>Fondé par Boina CHAMSOUDINE</p>
            {/* <p>Développé par Ben-Ali ABOUDOU</p> */}
            <p>© 2026 Tous droits réservés.</p>
        </div>
        <div class="contact-icons">
            <a href="http://www.linkedin.com/in/chamsoudine-b-882803a5/"><img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn" /></a>
            <a href="https://tiktok.com/"><img src={`${process.env.PUBLIC_URL}/assets/tiktok.png`} alt="TikTok" /></a>
        </div>
    </footer>
    );
}

export default Footer;