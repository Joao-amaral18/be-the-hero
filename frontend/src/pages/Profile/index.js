import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import "./style.css";
export default function Profile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    api.get("profile", {
      headers: {
        Authorization: ongId
      }
    })
      .then(res => {
        setIncidents(res.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incident/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }
  function handleLogout() {

    localStorage.clear();
    history.push('/');

  }
  return (
    <div className="profile-container">
      <header>
        <div className="logo">AMARAL</div>
        <span>Bem vindo, {ongName}</span>
        <Link className="button" to="/Incidents">
          cadastrar novo caso
        </Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos registrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Nome:</strong>
            <p>{incident.title}</p>
            <strong>Pedido:</strong>
            <p>Pedido {incident.description}</p>
            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size="20" color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
