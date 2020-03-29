import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash } from "react-icons/fi";
import "./style.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <div className="logo">AMARAL</div>
        <span>Bem vindo, USER</span>
        <Link className="button" to="/Incidents">
          cadastrar novo caso
        </Link>
        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos registrados</h1>
      <ul>
        <li>
          <strong>Nome:</strong>
          <p>test</p>
          <strong>Pedido:</strong>
          <p>Pedido test</p>
          <strong>Valor:</strong>
          <p>R$ 25,00</p>
          <button type="button">
            <FiTrash size="20" color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Nome:</strong>
          <p>test</p>
          <strong>Pedido:</strong>
          <p>Pedido test</p>
          <strong>Valor:</strong>
          <p>R$ 25,00</p>
          <button type="button">
            <FiTrash size="20" color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Nome:</strong>
          <p>test</p>
          <strong>Pedido:</strong>
          <p>Pedido test</p>
          <strong>Valor:</strong>
          <p>R$ 25,00</p>
          <button type="button">
            <FiTrash size="20" color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Nome:</strong>
          <p>test</p>
          <strong>Pedido:</strong>
          <p>Pedido test</p>
          <strong>Valor:</strong>
          <p>R$ 25,00</p>
          <button type="button">
            <FiTrash size="20" color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
