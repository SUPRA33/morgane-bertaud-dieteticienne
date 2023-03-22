import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const slideFromLeft = (element) => {
    gsap.fromTo(
      element,
      {
        x: -300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  };

  useEffect(() => {
    slideFromLeft(".anim-consultations");
    slideFromLeft(".event-title");
  }, []);

  return (
    <>
      <Navbar />
      <section className="banner-pricing container-fluid d-flex align-items-center justify-content-center">
        <h1>Mes tarifs</h1>
      </section>
      <section className="container consultation d-flex flex-column align-items-center py-5">
        <h2 className="anim-consultations">Consultations</h2>
        <div className="row col-12 d-flex justify-content-evenly flex-wrap py-5">
          <div className="col-3 item d-flex flex-column align-items-center p-4">
            <i className="fa-solid fa-user fa-4x pb-3" />
            <p>INDIVIDUEL</p>
            <p>
              Bilan initial : <span>60 &euro;</span>
            </p>
            <p>
              Suivis : <span>40 &euro;</span>
            </p>
          </div>
          <div className="col-3 item d-flex flex-column align-items-center p-4">
            <i className="fa-solid fa-user-group fa-4x pb-3" />
            <p>DUO</p>
            <p>
              Bilan initial : <span>85 &euro;</span>
            </p>
            <p>
              Suivis : <span>65 &euro;</span>
            </p>
          </div>
          <div className="col-3 item d-flex flex-column align-items-center p-4">
            <i className="fa-solid fa-house-chimney fa-4x pb-3" />
            <p>DOMICILE</p>
            <p>
              Frais de déplacements : <span>+5 &euro;</span>
            </p>
          </div>
          <div className="row info pt-4">
            <p>
              Prise en charge possible par votre mutuelle en fonction du contrat
              souscrit.
            </p>
            <p>
              Je vous encourage à vous rapprocher de cette dernière afin de
              connaitre vos droits.
            </p>
          </div>
        </div>
      </section>
      <section className="container event d-flex flex-column align-items-center py-5">
        <div className="event-title">
          <h2>Prestation entreprise et événements</h2>
          <p>(Team building)</p>
        </div>
        <div className="row col-12 d-flex justify-content-evenly flex-wrap py-5">
          <div className="col-3 item devis d-flex flex-column align-items-center p-4">
            <i className="fa-regular fa-pen-to-square fa-4x pb-3" />
            <p>SUR DEVIS</p>
          </div>
          <div className="row info pt-4">
            <p>
              Pour toute demande de prestation en entreprise ou d'événements à
              organiser, contactez moi afin d'établir un devis gratuit.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
