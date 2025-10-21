import React, { useState } from 'react';

function ReservarMesa() {
  const [dataReserva, setDataReserva] = useState('');
  const [horario, setHorario] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [contato, setContato] = useState('');
  const [mesaSelecionada, setMesaSelecionada] = useState('');

  const mesasDisponiveis = ['1', '2', '3', '4', '5'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada:
    Cliente: ${nomeCliente}
    Contato: ${contato}
    Data: ${dataReserva}
    Horário: ${horario}
    Mesa: ${mesaSelecionada}`);

    setDataReserva('');
    setHorario('');
    setNomeCliente('');
    setContato('');
    setMesaSelecionada('');
  };

  return (
    <div>
      <h2>Reservar Mesa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Data da reserva:
          <input
            type="date"
            value={dataReserva}
            onChange={(e) => setDataReserva(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Horário:
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Nome do Cliente:
          <input
            type="text"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            required
            placeholder="Digite o nome"
          />
        </label>
        <br /><br />

        <label>
          Contato:
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            required
            placeholder="Telefone ou email"
          />
        </label>
        <br /><br />

        <label>
          Mesa:
          <select
            value={mesaSelecionada}
            onChange={(e) => setMesaSelecionada(e.target.value)}
            required
          >
            <option value="">Selecione uma mesa</option>
            {mesasDisponiveis.map((mesa) => (
              <option key={mesa} value={mesa}>
                Mesa {mesa}
              </option>
            ))}
          </select>
        </label>
        <br /><br />

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default ReservarMesa;
