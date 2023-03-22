const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row col-sm contact-container d-flex justify-content-between">
          <div className="col contact-item d-flex justify-content-center align-items-center">
            <p>Retrouvez moi sur :</p>
            <a
              href="https://www.facebook.com/morganebertaud.dieteticienne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="social fa-brands fa-facebook fa-2x" />
            </a>
            <a
              href="https://www.instagram.com/morganemadiet/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="social fa-brands fa-instagram fa-2x" />
            </a>
          </div>
          <div className="col contact-item d-flex justify-content-center align-items-center hover-link">
            <a href="mailto:morgane.bertaud@me.com">
              <i className="contact fa-regular fa-envelope" />
              morgane.bertaud@me.com
            </a>
          </div>
          <div className="col contact-item d-flex justify-content-center align-items-center hover-link">
            <i className="contact fa-solid fa-phone"></i>
            <a href="tel:+33627860345">06 27 86 03 45</a>
          </div>
        </div>
        <div className="row col-12 copyright">
          <p>
            &copy; Morgane BERTAUD - Diététicienne - Nutritionniste. Tous droits
            réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
