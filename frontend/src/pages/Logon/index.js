import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import HeroesImg from "../../assets/heroes.png";
import api from "../../services/api";
export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post("sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", res.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente");
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <div className="logo">AMARAL</div>
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID"
          />
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
