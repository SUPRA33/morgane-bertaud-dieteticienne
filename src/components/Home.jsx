import mypic from "../assets/img/home/my-pic.jpg";
import quotes from "../assets/img/home/quotes.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
    slideFromLeft(".anim-objective");
    slideFromLeft(".anim-extras");
    slideFromLeft(".anim-business");
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="home-pic d-flex align-items-center">
          <div className="title">
            <h1>
              Une vraie méthode durable qui avance au rythme de votre corps.
            </h1>
          </div>
        </section>
        <section className="presentation">
          <div className="container d-flex flex-column align-items-center">
            <div className="row col-8 justify-content-center">
              <img id="mypic" src={mypic} alt="photo morgane bertaud" />
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <div className="row text">
                  <p>
                    Vous recevoir avec toute votre singularité, ce qui fait de
                    vous une personne unique. Je vous accompagne vers une
                    alimentation intuitive, où les pensées ne rythment pas vos
                    journées.
                  </p>
                </div>
                <div className="row">
                  <Link to="/projets/morgane-bertaud-dieteticienne/presentation/qui-suis-je">
                    Qui suis-je ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="quotes-box row col-9 justify-content-center mx-auto">
              <img className="quotes-left" src={quotes} alt="" />
              <img className="quotes-right" src={quotes} alt="" />
              <div className="col-10">
                <p>
                  Il est essentiel de manger, "fais de ton aliment ton
                  médicament" disait Hippocrate, mais la nutrition n'est pas
                  seulement le résultat de calories, de macro-nutriments et de
                  dépenses physiques. Nous sommes des êtres complexes qui ont
                  des émotions, des sensations, nous sommes des êtres qui
                  vivent.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="services overflow-hidden">
          <div className="container d-flex flex-column align-items-center">
            <div className="title anim-objective row flex-column">
              <h2>Objectifs des consultations</h2>
              <p>En présentiel ou à distance</p>
            </div>
            <div className="row col-12 section d-flex justify-content-evenly flex-wrap">
              <div className="column item">
                <div className="row bg-control bg-bilan"></div>
                <div className="row content">
                  <p>Le bilan</p>
                  <span>(approche globale)</span>
                </div>
              </div>
              <div className="column item">
                <div className="row bg-control bg-education"></div>
                <div className="row content">
                  <p>L'éducation alimentaire</p>
                </div>
              </div>
              <div className="column item">
                <div className="row bg-control bg-relation"></div>
                <div className="row content">
                  <p>Relation douce, bienveillance</p>
                </div>
              </div>
              <div className="column item">
                <div className="row bg-control bg-objective"></div>
                <div className="row content">
                  <p>Suivis, atteinte des objectifs</p>
                </div>
              </div>
            </div>
            <div className="title anim-extras row flex-column">
              <h2>Les petits plus</h2>
            </div>
            <div className="row col-12 section d-flex justify-content-evenly flex-wrap">
              <div className="column item">
                <div className="row bg-control bg-accompaniement"></div>
                <div className="row content">
                  <p>Accompagnements aux courses</p>
                  <span>(approche globale)</span>
                </div>
              </div>
              <div className="column item">
                <div className="row bg-control bg-drink"></div>
                <div className="row content">
                  <p>Avec une boisson chaude c'est toujours mieux</p>
                </div>
              </div>
              <div className="column item">
                <div className="row bg-control bg-nutrition"></div>
                <div className="row content">
                  <p>Micro-nutrition</p>
                </div>
              </div>
            </div>
            <div className="title anim-business row flex-column">
              <h2>En entreprise</h2>
            </div>
            <div className="row col-12 section d-flex justify-content-evenly flex-wrap">
              <div className="column item">
                <div className="row bg-control bg-diag"></div>
                <div className="row content">
                  <p>Diagnostic</p>
                  <span>
                    (impact psychosocial, baisse productivité, propositions de
                    solutions correstives)
                  </span>
                </div>
              </div>
              <div className="column item">
                <div className="row bg-control bg-groups"></div>
                <div className="row content">
                  <p>Ateliers en groupe</p>
                </div>
              </div>
              <div className="column item">
                <div className="row bg-control bg-conferences"></div>
                <div className="row content">
                  <p>Conférences, débats</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid body-positive d-flex align-items-center justify-content-center">
          <div>
            <h2>
              Body Positive
              <br />
              Acceptation de soi
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
