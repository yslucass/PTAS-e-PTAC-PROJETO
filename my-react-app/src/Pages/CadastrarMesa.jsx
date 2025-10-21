import React, { useState } from 'react';

function CadastrarMesa() {
  const [numeroMesa, setNumeroMesa] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [status, setStatus] = useState('disponível');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mesa ${numeroMesa}, capacidade: ${capacidade}, status: ${status}`);
    setNumeroMesa('');
    setCapacidade('');
    setStatus('disponível');
  };

  return (
    <div>
      <h2>Cadastrar Mesa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número da Mesa (ID):
          <input
            type="text"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
            required
            placeholder="Digite o número da mesa"
          />
        </label>
        <br /><br />

        <label>
          Capacidade da Mesa:
          <input
            type="number"
            min="1"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
            required
            placeholder="Número de pessoas"
          />
        </label>
        <br /><br />

        <label>
          Status da Mesa:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="disponível">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </label>
        <br /><br />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastrarMesa;
