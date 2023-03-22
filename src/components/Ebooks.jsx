import Navbar from "./Navbar";
import Footer from "./Footer";

import quotes from "../assets/img/home/quotes.png";
import ebook1 from "../assets/img/e-book/e-book-1.png";
import ebook2 from "../assets/img/e-book/e-book-2.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Ebook = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    gsap.fromTo(
      ".quotes-box",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2",
        scrollTrigger: {
          trigger: ".quotes-box",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

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
    slideFromLeft(".anim-how-to-get-title");
  }, []);

  return (
    <>
      <Navbar />
      <section className="banner-ebooks container-fluid d-flex align-items-center justify-content-center">
        <h1>E-books</h1>
      </section>
      <section className="quotes d-flex flex-column align-items-center overflow-hidden">
        <div className="quotes-box col-xs row justify-content-center p-5">
          <img className="quotes-left" src={quotes} alt="" />
          <img className="quotes-right" src={quotes} alt="" />
          <div className="col-10">
            <p>
              Mes guides complets pour aider à toujours mieux vous accompagner
              dans votre alimentation et ne plus se poser la question de "qu'est
              ce qu'on mange ?"
            </p>
            <p>
              1 mois de menu avec des idées recettes rapides, originales et
              goûteuses à base de produits de saisons.
            </p>
          </div>
        </div>
      </section>
      <section className="ebooks overflow-hidden">
        <div className="container d-flex flex-column align-items-center">
          <div className="row guid">
            <p>Ces guides sont compatibles avec vos programmes en cours.</p>
            <p>Les petits plus :</p>
            <ul>
              <li>Listes de courses par semaine (pour 1 personne)</li>
              <li>Calendrier de saison (6 mois)</li>
              <li>Produits du moment à découvrir</li>
            </ul>
          </div>
          <div className="row ebook-item align-items-center justify-content-center">
            <img src={ebook1} className="ebook-pic" alt="ebook printemps été" />
            <div className="col detail">
              <p className="title">E-book - Printemps / Eté</p>
              <p className="summary">Sommaire (61 pages) :</p>
              <ul>
                <li>Sauces et Tartinades</li>
                <li>Versions salées</li>
                <li>Versions sucrées</li>
                <li>Mon mois de menu</li>
                <li>Mes recettes</li>
                <li>Mes listes de courses</li>
                <li>Mes calendriers de saison</li>
                <li>Biographie</li>
              </ul>
              <p className="price">29,00 &euro;</p>
            </div>
          </div>
          <div className="row ebook-item align-items-center justify-content-center">
            <img src={ebook2} className="ebook-pic" alt="ebook printemps été" />
            <div className="col detail">
              <p className="title">E-book - Automne / Hiver, batch-cooking</p>
              <p className="summary">Sommaire (75 pages) :</p>
              <ul>
                <li>Sauces et Tartinades</li>
                <li>Versions salées</li>
                <li>Versions sucrées</li>
                <li>Mon mois de menu</li>
                <li>Mes recettes</li>
                <li>Mes listes de courses</li>
                <li>Mes calendriers de saison</li>
                <li>Biographie</li>
              </ul>
              <p className="price">29,00 &euro;</p>
            </div>
          </div>
          <div className="row how-to-get flex-column align-items-center">
            <h2 className="anim-how-to-get-title">
              Comment obtenir mon e-book ?
            </h2>
            <div className="row col-7">
              <p>Pour effectuer une commande, suivez ces étapes :</p>
              <ol>
                <li>
                  Contactez-moi par le moyen de votre choix (formulaire de
                  contact, sms, e-mail), en spécifiant votre demande.
                </li>
                <li>Effectuez le règlement via le lien reçu.</li>
                <li>Téléchargez votre E-book et régalez-vous.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Ebook;
