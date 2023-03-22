import Footer from "./Footer";
import Navbar from "./Navbar";
import quotes from "../assets/img/home/quotes.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);
  const box7Ref = useRef(null);
  const box8Ref = useRef(null);
  const box9Ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 668) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: ".testimonials",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.fromTo(
        [
          box1Ref.current,
          box3Ref.current,
          box5Ref.current,
          box7Ref.current,
          box9Ref.current,
        ],
        { x: "0" },
        { x: "+=100" }
      ).fromTo(
        [box2Ref.current, box4Ref.current, box6Ref.current, box8Ref.current],
        { x: "0" },
        { x: "-=100" },
        0
      );
    }
  }, []);

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

  return (
    <>
      <Navbar />
      <section className="banner-testimonials container-fluid d-flex justify-content-center align-items-center">
        <h1>Témoignages</h1>
      </section>
      <section className="quotes d-flex flex-column align-items-center overflow-hidden">
        <div className="quotes-box col-xs row justify-content-center p-5">
          <img className="quotes-left" src={quotes} alt="" />
          <img className="quotes-right" src={quotes} alt="" />
          <div className="col-10">
            <p>
              Je mets à votre service mes compétences en matière d'alimentation.
            </p>
            <p>Votre satisfaction est mon moteur.</p>
          </div>
        </div>
      </section>
      <section className="testimonials container d-flex flex-column p-4">
        <div className="row">
          <div className="item p-4" ref={box1Ref}>
            <p>
              Diététicienne sérieuse et à l'écoute. Elle prend en compte
              l'ensemble de votre situation afin de bien comprendre vos
              objectifs et vous accompagner au mieux.
            </p>
            <p className="author">Barbara ALLANIC</p>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="item p-4" ref={box2Ref}>
            <p>
              Les conseils avisés prodigués par cette professionnelle de santé
              ont été bénéfiques, les résultats spectaculaires, je la
              recommande.
            </p>
            <p className="author">Jean Marie SAUVAGE</p>
          </div>
        </div>
        <div className="row">
          <div className="item p-4" ref={box3Ref}>
            <p>
              Très professionnelle tout en étant proche de ses patients ! Bon
              contact, bon suivi et bons résultats, je recommande !
            </p>
            <p className="author">Jonathan AMBLARD</p>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="item p-4" ref={box4Ref}>
            <p>
              Très bonne diététicienne. Elle sait vous diriger sans jugement.
              Ses regimes sont efficaces dans le temps. Pas de reprise de poids
              après votre passage chez elle. Très bon suivit et très bonne
              écoute. Je la conseille vivement.
            </p>
            <p className="author">Agnes GUEANT</p>
          </div>
        </div>
        <div className="row">
          <div className="item p-4" ref={box5Ref}>
            <p>
              Praticienne professionnelle agréable, claire dans toutes ces
              explications et convaincante. Mise en confiance immédiate.
            </p>
            <p className="author">Lorette SAUVAGE</p>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="item p-4" ref={box6Ref}>
            <p>
              Une professionnelle compétente, rigoureuse et empathique. Je la
              recommande vivement.
            </p>
            <p className="author">Julie COLLOMBAT</p>
          </div>
        </div>
        <div className="row">
          <div className="item p-4" ref={box7Ref}>
            <p>
              C'est en toute confiance que je réoriente mes patients à Mme
              BERTAUD depuis un an. Praticienne dynamique, les prises en charges
              sont adaptées aux patients. Ses différentes interventions en
              cabinet, hôpitaux, milieux sportifs, maternité, centre
              d'addictologie font de Morgane une diététicienne complète. Je
              recommande les yeux fermés. Merci pour cette collaboration.
            </p>
            <p className="author">Thomas RIGAULT - Ostéopathe</p>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="item p-4" ref={box8Ref}>
            <p>
              Je recommande fortement, grâce à Morgane j ai pu stabiliser mon
              poids et apprendre à me rééquilibrer dans le cadre de mon diabète
              gestationnel pendant ma grossesse! De plus avec ses conseils je
              suis ravie d avoir pu découvrir des nouvelles saveurs ! Merci
              encore.
            </p>
            <p className="author">Mégann GOMEZ</p>
          </div>
        </div>
        <div className="row">
          <div className="item p-4" ref={box9Ref}>
            <p>
              Morgane me suis depuis un petit moment maintenant, une personne
              très agréable et surtout à l'écoute de ses patients et de ses
              attentes, très bonnes conseillère et répartition alimentaire.
              Niveau professionnalisme rien à dire. Je recommande.
            </p>
            <p className="author">Amandine LANNIE</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Testimonials;
