import "../assets/scss/styles.scss";

import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import ForWho from "./ForWho";
import Law from "./Law";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Appointment from "./Appointment";
import Ebooks from "./Ebooks";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => setIsLoading(true);
    const handleLoad = () => setIsLoading(false);

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/projets/morgane-bertaud-dieteticienne"
            element={<Home />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/presentation/qui-suis-je"
            element={<AboutMe />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/presentation/pour-qui"
            element={<ForWho />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/presentation/que-dit-la-loi"
            element={<Law />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/temoignages"
            element={<Testimonials />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/contact"
            element={<Contact />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/tarifs"
            element={<Pricing />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/rdv-en-ligne"
            element={<Appointment />}
          />
          <Route
            path="/projets/morgane-bertaud-dieteticienne/e-books"
            element={<Ebooks />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
