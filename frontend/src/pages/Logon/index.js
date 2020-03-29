import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import { Link } from "react-router-dom";
import HeroesImg from "../../assets/heroes.png";
export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <div className="logo">AMARAL</div>
        <form action="">
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={HeroesImg} alt="Heroes" />
    </div>
  );
}
