import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Appointment = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <section className="banner-appointment container-fluid d-flex align-items-center justify-content-center">
        <h1>Prendre rendez-vous</h1>
      </section>
      <section className="appointment">
        <div className="container d-flex flex-column align-items-center">
          <div className="title row flex-column">
            <h2>Prise de Rdv</h2>
          </div>
          <div className="col-10 d-flex flex-column align-items-center">
            <p className="content">
              Afin de faciliter l'organisation de mon emploi du temps, les
              rendez-vous se font par le biais de la plateforme Doctolib.
            </p>
            <a
              className="btn"
              href="https://www.doctolib.fr/dieteticien/begles/morgane-bertaud"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre RDV
            </a>
            <p className="content">
              ou par téléphone au : <a href="tel:0627860345">06 27 86 03 45</a>
            </p>
            <p className="delay">
              Le délai moyen d'attente pour obtenir un rendez-vous est de 3
              semaines.
            </p>
            <p className="delay">
              Je consulte principalement sur Bègles et les rdv sur Arcachon sont
              donc assez complets.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Appointment;
