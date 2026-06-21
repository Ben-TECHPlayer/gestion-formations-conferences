import React from 'react';

function Footer() {
    return (
    <footer>
        <div class="droits-auteur">
            <p>© 2026 Ben-Ali ABOUDOU. Tous droits réservés.</p>
            <p className="marge">Étudiant en BUT Informatique à l'IUT d'Orsay</p>
        </div>
        <div class="contact-icons">
            {/* <a href="mailto:aboudoubenali@gmail.com"><img src={`${process.env.PUBLIC_URL}/assets/gmail.png`} alt="Gmail" /></a> */}
            {/* <a href="http://www.linkedin.com/in/ben-ali-aboudou-9a412b269/"><img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn" /></a> */}
            {/* <a href="https://github.com/Ben-TECHPlayer"><img src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="GitHub" /></a> */}
            {/* <a href="https://youtube.fr/@Ben_CR7"> <img src={`${process.env.PUBLIC_URL}/assets/youtube.png`} alt="Youtube" /></a>  */}
        </div>
    </footer>
    );
}

export default Footer;