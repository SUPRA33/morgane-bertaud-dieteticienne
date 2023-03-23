import Footer from "./Footer";
import Navbar from "./Navbar";

import quotes from "../assets/img/home/quotes.png";
import my_pic from "../assets/img/qui-suis-je/pic-about-me.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const location = useLocation();

  const page = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);

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

  useEffect(() => {
    if (window.innerWidth > 668) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.fromTo(
        [box1Ref.current, box3Ref.current, box5Ref.current],
        { x: "0" },
        { x: "+=100" }
      ).fromTo(
        [box2Ref.current, box4Ref.current],
        { x: "0" },
        { x: "-=100" },
        0
      );
    }
  }, []);
  return (
    <>
      <Navbar />
      <section className="container-fluid banner-about-me d-flex justify-content-center align-items-center">
        <h1>Qui suis-je ?</h1>
      </section>
      <section className="about-me p-5 d-flex justify-content-center align-items-center">
        <div className="quotes-box d-flex align-items-center py-5 px-3 flex-wrap justify-content-evenly">
          <img className="quotes-left" src={quotes} alt="" />
          <img className="quotes-right" src={quotes} alt="" />
          <div className="text col-lg-7">
            <p>Je m'appelle Morgane BERTAUD,</p>
            <p>
              Diplômée d'un BTS Diététique, je suis une professionnelle de
              l'alimentation et de la nutrition.
            </p>
          </div>
          <div className="img col-lg-4 col-md-10 ps-3 d-flex justify-content-center">
            <img className="my-pic" src={my_pic} alt="" />
          </div>
        </div>
      </section>
      <section className="cursus overflow-hidden px-4">
        <div className="container">
          <div className="row item">
            <div
              className="box1 col-lg-5 col-md-6 box-style d-flex flex-column m-4 p-4"
              ref={box1Ref}
            >
              <h3>Spécialisation</h3>
              <p>
                Spécialisée en Addictologie avec un Diplôme Universitaire (D.U)
              </p>
              <p>
                Cette formation me donne des compétences supplémentaires lors
                des prises en charges des TCA (Troubles du Comportement
                Alimentaire)
              </p>
              <p>
                Formation en Thérapie Comportementale et Cognitive (TCC - en
                cours)
              </p>
            </div>
          </div>
          <div className="row item d-flex end">
            <div
              className="box2 col-lg-7 col-md-10 box-style d-flex flex-column m-4 p-4"
              ref={box2Ref}
            >
              <h3>Enfants</h3>
              <p>
                Membre du REPPOP Aquitaine, j'accompagne les enfants ainsi que
                leur famille afin de modifier leurs comportements alimentaires
                mais aussi de travailler sur le plan de l'activité physique.
              </p>
              <p>
                Je complète l'équipe accompagnatrice des autres professionnels
                afin de proposer la meilleure prise en charge qui soit.
              </p>
            </div>
          </div>
          <div className="row item">
            <div
              className="box3 col-lg-8 col-md-10 box-style d-flex flex-column m-4 p-4"
              ref={box3Ref}
            >
              <h3>Éducation - Ateliers</h3>
              <p>
                Formée à l' Education Thérapeutique du Patient (ETP 40h), cette
                dernière me permet d'affiner ma prise en charge et de vous
                mettre au centre du soin.
              </p>
              <p>Vous êtes l'acteur, je suis là pour vous assister.</p>
            </div>
          </div>
          <div className="row item d-flex end">
            <div
              className="box4 col-lg-7 col-md-10 box-style d-flex flex-column m-4 p-4"
              ref={box4Ref}
            >
              <h3>Professionnel</h3>
              <p>De multiples expériences à votre service :</p>
              <p className="title">Au CHU de Bordeaux</p>
              <ul>
                <li>Service maternité</li>
                <li>Service cardiologie adulte et pédiatrique</li>
                <li>Service obésité</li>
              </ul>
              <p className="title">En centre d'Addictologie</p>
              <ul>
                <li>CEID de Planterose (Bordeaux)</li>
                <li>CSAPA Résidentiel (Bègles)</li>
              </ul>
              <p className="title">En cabinet</p>
              <ul>
                <li>Deux cabinets pluridisciplinaires</li>
                <li>
                  Echanges réguliers avec Centre Jean Abbadie pour les TCA
                </li>
                <li>Plateforme #stoptca</li>
                <li>Ateliers pour des CCAS, animations pour des Mairies …</li>
                <li>
                  Liens avec médecins, chirurgiens, psychologues, psychiatres
                  permanents
                </li>
                <li>Formation en continu</li>
                <li>Formatrice en Bachelor Diététique</li>
                <li>
                  Associée Posturall - plateforme dédiée au bien être en
                  entreprise
                </li>
              </ul>
              <p className="italic">
                [...] et je l'espère encore de nombreux projets et expériences à
                votre service.
              </p>
            </div>
          </div>
          <div className="row item">
            <div
              className="box5 col-lg-6 col-md-10 box-style d-flex flex-column m-4 p-4"
              ref={box5Ref}
            >
              <h3>Associatif</h3>
              <p className="title">Fête le mûr de Yannick Noah</p>
              <p>Diététicienne référente Nationale projet nutrition</p>
              <p className="title">
                Silver Fourchette - évènements pour Séniors
              </p>
              <p>Diététicienne pour le Bassin d'Arcachon et Bordeaux</p>
              <p className="title">Ligue contre le cancer</p>
              <p>Diététicienne pour zone Sud-Bassin</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}

      <section className="slider">
        <Carousel
          autoPlay
          infiniteLoop={true}
          showStatus={false}
          interval={6000}
          showThumbs={false}
        >
          <div className="quote">
            <p>
              "La pleine attention est la clef, elle vous permet de mieux
              percevoir votre corps, vos émotions, vos envies..."
            </p>
          </div>
          <div className="quote">
            <p>"Créer une alliance thérapeutique."</p>
          </div>
          <div className="quote">
            <p>
              "Prendre son temps, pour se connaitre soi, pour mieux appréhender
              vos comportements et votre relation à la nourriture."
            </p>
          </div>
          <div className="quote">
            <p>
              "Relation de confiance, basée sur la bienveillance et le non
              jugement."
            </p>
          </div>
          <div className="quote">
            <p>"Vous faire renouer avec vos sensations corporelles."</p>
          </div>
          <div className="quote">
            <p>"Vous placer au centre de votre prise en charge."</p>
          </div>
        </Carousel>
      </section>
      <Footer />
    </>
  );
};

export default AboutMe;
