import Navbar from "./Navbar";
import Footer from "./Footer";

import { useEffect, useState, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useLocation } from "react-router-dom";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [map1, setMap1] = useState(null);
  const [map2, setMap2] = useState(null);
  const [marker1, setMarker1] = useState(null);
  const [marker2, setMarker2] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const google = window.google;

      // MAP BEGLES
      const map1 = new google.maps.Map(document.getElementById("map1"), {
        center: { lat: 44.80768966674805, lng: -0.5538061857223511 },
        zoom: 15,
      });
      setMap1(map1);

      // MARKER BEGLES
      setMarker1(
        new window.google.maps.Marker({
          position: { lat: 44.80768966674805, lng: -0.5538061857223511 },
          map: map1,
          title: "Cabinet Morgane BERTAUD - Bègles",
        })
      );
      // MAP ARCACHON
      const map2 = new google.maps.Map(document.getElementById("map2"), {
        center: { lat: 44.6593403, lng: -1.1649358 },
        zoom: 15,
      });
      setMap2(map2);

      // MARKER ARCACHON
      setMarker2(
        new window.google.maps.Marker({
          position: { lat: 44.6593403, lng: -1.1649358 },
          map: map2,
          title: "Cabinet Morgane BERTAUD - Arcachon",
        })
      );
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Ce formulaire n'est pas fonctionnel car il n'est pas hébergé pour le moment. Veuillez-vous rendre sur le site https://morganebertaud.wixsite.com/morganemadiet"
    );
  };

  const [val, setVal] = useState();
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e) => {
    setVal(e.target.value);
  };

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
    slideFromLeft(".anim-localisation");
    slideFromLeft(".anim-question");
  }, []);

  return (
    <>
      <Navbar />
      <section className="banner-contact container-fluid d-flex align-items-center justify-content-center">
        <h1>Me contacter</h1>
      </section>
      <section className="localisation p-5">
        <div className="container d-flex flex-column">
          <h2 className="anim-localisation">Localisez moi</h2>
          <div className="row map-container map-1 d-flex justify-content-center align-items-center flex-wrap">
            <div className="col col-xs p-4">
              <h3>Cabinet de Bègles</h3>
              <a href="https://www.google.com/maps/dir/44.6505508,-0.8563404/4+Pl.+de+la+Libert%C3%A9,+33130+B%C3%A8gles/@44.7257165,-0.8357654,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd5526f750fc814f:0x6ad6b6f77214b1e5!2m2!1d-0.5537341!2d44.8075345">
                4 Place de la Liberté, 33130 Bègles
              </a>
            </div>
            <div className="col-5 map-control" id="map1">
              {map1 && <p>Carte chargée.</p>}
            </div>
          </div>
          <div className="row map-2 map-container d-flex justify-content-center align-items-center flex-wrap">
            <div className="col-5 map-control" id="map2">
              {map2 && <p>Carte chargée.</p>}
            </div>
            <div className="col col-xs p-4">
              <h3>Cabinet d'Arcachon</h3>
              <a href="https://www.google.com/maps/dir/?api=1&destination=35%20Boulevard%20du%20G%C3%A9n%C3%A9ral%20Leclerc,%2033120%20Arcachon,%20France">
                35 Boulevard du Général Leclerc, 33120 Arcachon
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact py-4">
        <h2 className="anim-question">Une question ?</h2>
        <form onSubmit={handleSubmit}>
          <div className="container d-flex my-5 px-0">
            <div className="form col-8 d-flex flex-column align-items-center">
              <h3>Contactez-moi</h3>
              <div className="row info col-10 mb-3 d-flex">
                <div className="col mb-3">
                  <label htmlFor="name">NOM*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                  />
                </div>
                <div className="col">
                  <label htmlFor="email">ADRESSE EMAIL*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="row col-10 mb-3">
                <div className="col">
                  <label htmlFor="subject">SUJET</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sujet"
                  />
                </div>
              </div>
              <div className="row col-10 mb-3">
                <div className="form-group">
                  <label htmlFor="message">MESSAGE*</label>
                  <textarea
                    ref={textAreaRef}
                    value={val}
                    onChange={onChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="Saisissez votre message..."
                  ></textarea>
                </div>
              </div>
              <div className="d-flex custom-control custom-checkbox mb-3 ms-5 mr-sm-2 col-10">
                <input
                  type="checkbox"
                  className="custom-control-input me-3"
                  id="checkbox"
                />
                <label className="custom-control-label" htmlFor="checkbox">
                  En soumettant ce formulaire, j'accepte que mes données
                  personnelles soient utilisées pour me recontacter.
                </label>
              </div>
              <button type="submit" className="btn btn-primary px-4 py-2">
                Envoyer
              </button>
            </div>
            <div className="col form-bg"></div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
