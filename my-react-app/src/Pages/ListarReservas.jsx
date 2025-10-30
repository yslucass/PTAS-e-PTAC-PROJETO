import React, { useState, useEffect } from "react";

function ListarReservas() {
  const [reservas, setReservas] = useState([]);

  // Simulando dados de exemplo
  useEffect(() => {
    const reservasExemplo = [
      { idReserva: 1, numeroMesa: 5, data: "2025-11-01", status: "Confirmada" },
      { idReserva: 2, numeroMesa: 3, data: "2025-11-02", status: "Pendente" },
      { idReserva: 3, numeroMesa: 1, data: "2025-11-05", status: "Cancelada" },
    ];
    setReservas(reservasExemplo);
  }, []);

  const handleCancelar = (idReserva) => {
    if (window.confirm("Tem certeza que deseja cancelar esta reserva?")) {
      setReservas(reservas.map(r => 
        r.idReserva === idReserva ? { ...r, status: "Cancelada" } : r
      ));
      alert(`Reserva ${idReserva} cancelada.`);
    }
  };

  const handleEditar = (idReserva) => {
    alert(`Editar reserva ${idReserva} (futuro formulário de edição).`);
  };

  const handleVerDetalhes = (idReserva) => {
    alert(`Ver detalhes da reserva ${idReserva}.`);
  };

  return (
    <div className="container">
      <h2>Listar Reservas</h2>

      <table>
        <thead>
          <tr>
            <th>N° da Mesa</th>
            <th>N° da Reserva</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length > 0 ? (
            reservas.map((reserva) => (
              <tr key={reserva.idReserva}>
                <td>{reserva.numeroMesa}</td>
                <td>{reserva.idReserva}</td>
                <td>{reserva.data}</td>
                <td>{reserva.status}</td>
                <td className="actions">
                  <button
                    className="btn-detail"
                    onClick={() => handleVerDetalhes(reserva.idReserva)}
                  >
                    Ver Detalhes
                  </button>
                  <button
                    className="btn-edit"
                    onClick={() => handleEditar(reserva.idReserva)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-cancel"
                    onClick={() => handleCancelar(reserva.idReserva)}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Nenhuma reserva encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListarReservas;
