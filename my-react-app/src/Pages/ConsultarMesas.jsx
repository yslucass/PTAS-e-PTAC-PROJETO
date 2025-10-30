import React, { useState } from "react";
function ConsultarMesas() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [statusMesa, setStatusMesa] = useState("");
  const [capacidadeMesa, setCapacidadeMesa] = useState("");

  const handleConsultar = () => {
    console.log("Consultando mesa...");
    console.log({
      numeroMesa,
      statusMesa,
      capacidadeMesa,
    });
    alert("Consulta realizada (simulação)!");
  };

  const handleLimpar = () => {
    setNumeroMesa("");
    setStatusMesa("");
    setCapacidadeMesa("");
  };

  return (
    <div className="container">
      <h2>Consultar Mesas</h2>

      <div className="form-group">
        <label>N° da Mesa:</label>
        <input
          type="number"
          value={numeroMesa}
          onChange={(e) => setNumeroMesa(e.target.value)}
          placeholder="Digite o número da mesa"
        />
      </div>

      <div className="form-group">
        <label>Status da Mesa:</label>
        <select
          value={statusMesa}
          onChange={(e) => setStatusMesa(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="disponivel">Disponível</option>
          <option value="ocupada">Ocupada</option>
          <option value="reservada">Reservada</option>
        </select>
      </div>

      <div className="form-group">
        <label>Capacidade da Mesa:</label>
        <input
          type="number"
          value={capacidadeMesa}
          onChange={(e) => setCapacidadeMesa(e.target.value)}
          placeholder="Digite a capacidade"
        />
      </div>

      <div className="button-group">
        <button onClick={handleConsultar}>Consultar</button>
        <button onClick={handleLimpar} className="btn-clear">
          Limpar
        </button>
      </div>
    </div>
  );
}

export default ConsultarMesas;
