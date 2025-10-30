import React, { useState } from "react";

function Reservas() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [dataReserva, setDataReserva] = useState("");
  const [horaReserva, setHoraReserva] = useState("");
  const [observacao, setObservacao] = useState("");

  const handleReservar = (e) => {
    e.preventDefault();

    if (!numeroMesa || !nomeCliente || !dataReserva || !horaReserva) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const novaReserva = {
      numeroMesa,
      nomeCliente,
      dataReserva,
      horaReserva,
      observacao,
    };

    console.log("Reserva criada:", novaReserva);
    alert("Reserva criada com sucesso!");

    // Limpa o formulário
    setNumeroMesa("");
    setNomeCliente("");
    setDataReserva("");
    setHoraReserva("");
    setObservacao("");
  };

  const handleLimpar = () => {
    setNumeroMesa("");
    setNomeCliente("");
    setDataReserva("");
    setHoraReserva("");
    setObservacao("");
  };

  return (
    <div className="container">
      <h2>Nova Reserva</h2>

      <form onSubmit={handleReservar} className="form-reserva">
        <div className="form-group">
          <label>N° da Mesa:</label>
          <input
            type="number"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
            placeholder="Digite o número da mesa"
            required
          />
        </div>

        <div className="form-group">
          <label>Nome do Cliente:</label>
          <input
            type="text"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            placeholder="Digite o nome do cliente"
            required
          />
        </div>

        <div className="form-group">
          <label>Data da Reserva:</label>
          <input
            type="date"
            value={dataReserva}
            onChange={(e) => setDataReserva(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Hora da Reserva:</label>
          <input
            type="time"
            value={horaReserva}
            onChange={(e) => setHoraReserva(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Observação:</label>
          <textarea
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            placeholder="Ex: aniversário, pedido especial..."
            rows="3"
          />
        </div>

        <div className="button-group">
          <button type="submit">Reservar</button>
          <button type="button" className="btn-clear" onClick={handleLimpar}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reservas;
