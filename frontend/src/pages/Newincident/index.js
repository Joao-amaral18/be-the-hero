import React from "react";
import "./style.css";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Incidents() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <div className="logo">AMARAL</div>
          <h1>Cadastrar novo caso.</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/Profile">
            <FiArrowLeft size={16} color="#e02041" />
            voltar para home
          </Link>
        </section>
        <form action="">
          <input type="text" placeholder="Titulo" />
          <textarea type="text" placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
