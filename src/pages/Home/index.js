import React from "react";
import logo from "../../assets/logo.svg";
import mockup from "../../assets/mockup-celular.svg";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Veloz" />
          <p className="logo-texto">VELOZ</p>
        </div>
        <div className="main-content">
          <div className="aside-left">
            <img
              className="mackup-celular"
              src={mockup}
              alt="Mockup"
              loading="lazy"
            />
          </div>
          <div className="aside-right">
            <p className="font-title text-center">
              Aumente sua perfomance com segurança, tecnologia e acompanhamento
              de profissionais.
            </p>
            <a
              className="btn-download"
              href="app-universal-release.apk"
              target="_blank"
              download
            >
              baixar para android (BETA)
            </a>
            <button className="btn-disabled">baixar para ios (em breve)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
