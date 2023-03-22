import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ForWho = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(100, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <section className="container-fluid banner-for-who d-flex justify-content-center align-items-center">
        <h1>Pour qui ?</h1>
      </section>
      <section className="container for-who d-flex flex-column align-items-center overflow-hidden">
        <div className="row for-all">
          <p>
            L'alimentation est affaire de tous, elle nous concerne tous, et ce à
            tout âge.
          </p>
        </div>
        <div className="row col-12 d-flex justify-content-evenly flex-wrap p-3">
          <div className="column item">
            <div className="row bg-control bg-adult"></div>
            <div className="row">
              <h3>Adultes</h3>
              <p>
                Que vous soyez bien portant, atteints d'une pathologie
                nécessitant une prise en charge diététique, ou encore dans une
                démarche de perte de poids, je vous accompagne vers votre
                objectif, dans le respect et la bienveillance.
              </p>
            </div>
          </div>
          <div className="column item">
            <div className="row bg-control bg-pregnancy"></div>
            <div className="row">
              <h3>Grossesse</h3>
              <p>
                La grossesse est synonyme de changements métaboliques. Vos
                besoins ont changé le jour où vous êtes tombée enceinte, et ne
                cessent de varier à chaque mois qui passe. Vous souffrez de
                Diabète gestationnel ? Je suis formée à ce type de prise en
                charge.
              </p>
            </div>
          </div>
          <div className="column col-3 item">
            <div className="row bg-control bg-child"></div>
            <div className="row">
              <h3>Enfants</h3>
              <p>
                L'enfance est une période intense où l'apprentissage et la
                croissance rythment les premières années de vie. C'est à cette
                période que l'enfant conditionne ses repères et habitudes, qu'il
                conservera à l'âge adulte, il faut les éduquer dès maintenant.
              </p>
            </div>
          </div>
        </div>
        <div className="row col-12 d-flex justify-content-evenly flex-wrap p-3">
          <div className="column item">
            <div className="row bg-control bg-teenager"></div>
            <div className="row">
              <h3>Adolescents</h3>
              <p>
                L' adolescence est synonyme de transformations physiques mais
                aussi psychologiques. De nouveaux besoins apparaissent au fur et
                à mesure que le corps évolue. Cette période est la charnière
                entre votre corps d'enfant et votre futur corps d'adulte, il est
                donc important d' avoir une bonne alimentation.
              </p>
            </div>
          </div>
          <div className="column item">
            <div className="row bg-control bg-senior"></div>
            <div className="row">
              <h3>Séniors</h3>
              <p>
                Parceque pour vous aussi, l'alimentation joue un rôle
                primordial. Votre corps change après 50 ans, et ses besoins
                aussi. Avoir une alimentation couvrant ses besoins c'est aussi
                retarder l'apparition de certains troubles. Je suis donc là pour
                vous donner de nouveaux réflexes, simples, basés sur un
                rééquilibrage plaisir, sans frustration.
              </p>
            </div>
          </div>
          <div className="column col-3 item">
            <div className="row bg-control bg-sports"></div>
            <div className="row">
              <h3>Sportifs</h3>
              <p>
                En quête de performances et d'objectif ? L'alimentation et la
                micro-nutrition peuvent pour aider découvrir vers de nouvelles
                sensations lors de vos sessions, running, matchs …
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForWho;
