import Navbar from "./Navbar";
import Footer from "./Footer";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

const Law = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(100, 0);
  }, [location]);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1050) {
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
        [box1Ref.current, box3Ref.current],
        { x: "0" },
        { x: "+=100" }
      ).fromTo(box2Ref.current, { x: "0" }, { x: "-=100" }, 0);
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="container-fluid banner-law d-flex justify-content-center align-items-center">
        <h1>Que dit la loi ?</h1>
      </section>
      <section className="law container d-flex flex-column p-4">
        <div className="row">
          <div className="item p-4" ref={box1Ref}>
            <p className="article">Article L4371-1</p>
            <p>
              Modifié par Loi n°2007-127 du 30 janvier 2007 - art. 14 JORF 1er
              février 2007 Est considérée comme exerçant la profession de
              diététicien toute personne qui, habituellement, dispense des
              conseils nutritionnels et, sur prescription médicale, participe à
              l'éducation et à la rééducation nutritionnelle des patients
              atteints de troubles du métabolisme ou de l'alimentation, par
              l'établissement d'un bilan diététique personnalisé et une
              éducation diététique adaptée.
            </p>
            <p>
              Les diététiciens contribuent à la définition, à l'évaluation et au
              contrôle de la qualité de l'alimentation servie en collectivité,
              ainsi qu'aux activités de prévention en santé publique relevant du
              champ de la nutrition.
            </p>
          </div>
        </div>
        <div className="row justify-content-end py-4">
          <div className="item p-4" ref={box2Ref}>
            <p className="article">Article L4371-1</p>
            <p>
              Est considérée comme exerçant la profession de diététicien toute
              personne qui, habituellement, dispense des conseils nutritionnels
              et, sur prescription médicale, participe à l'éducation et à la
              rééducation nutritionnelle des patients atteints de troubles du
              métabolisme ou de l'alimentation, par l'établissement d'un bilan
              diététique personnalisé et une éducation diététique adaptée. Les
              diététiciens contribuent à la définition, à l'évaluation et au
              contrôle de la qualité de l'alimentation servie en collectivité,
              ainsi qu'aux activités de prévention en santé publique relevant du
              champ de la nutrition.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="item p-4" ref={box3Ref}>
            <p className="article">Article L4371-2</p>
            <p>
              Seuls peuvent exercer la profession de diététicien et porter le
              titre de diététicien, accompagné ou non d'un qualificatif, les
              personnes titulaires du diplôme d'Etat mentionné à l'article L.
              4371-3 ou titulaires de l'autorisation prévue à l'article L.
              4371-4.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Law;
