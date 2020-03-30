import React, { useState } from "react";
import "./style.css";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

export default function Incidents() {
  const [title, setTitle] = useState('');
  const history = useHistory('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }
    try {
      await api.post('incident', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');
    } catch (err) {
      alert("Erro ao cadastrar novo caso, tente novamente");
    }
  }
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
        <form onChange={handleNewIncident}>
          <input type="text"
            placeholder="Titulo"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea type="text"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
