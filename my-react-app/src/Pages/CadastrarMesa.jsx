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

  const handleLimpar = () => {
    setNumeroMesa('');
    setCapacidade('');
    setStatus('disponível');
  };

  return (
    <div className="container">
      <h2>Cadastrar Mesa</h2>

      <form onSubmit={handleSubmit} className="form-cadastro">
        <div className="form-group">
          <label>Número da Mesa (ID):</label>
          <input
            type="text"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
            required
            placeholder="Digite o número da mesa"
          />
        </div>

        <div className="form-group">
          <label>Capacidade da Mesa:</label>
          <input
            type="number"
            min="1"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
            required
            placeholder="Número de pessoas"
          />
        </div>

        <div className="form-group">
          <label>Status da Mesa:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="disponível">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">Salvar</button>
          <button type="button" className="btn-clear" onClick={handleLimpar}>
            Limpar
          </button>
        </div>
      </form>

      {/* ====== CSS INTERNO ====== */}
      <style>{`
        .container {
          max-width: 480px;
          margin: 40px auto;
          padding: 25px 30px;
          background: linear-gradient(135deg, #e6e6fa, #d0e1ff);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(140, 82, 255, 0.2);
          font-family: "Poppins", sans-serif;
        }

        h2 {
          text-align: center;
          color: #4a3aff;
          font-size: 1.8rem;
          margin-bottom: 25px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .form-cadastro {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: 600;
          color: #3b2b80;
          margin-bottom: 6px;
        }

        input, select {
          padding: 10px;
          border: 1px solid #b8b8ff;
          border-radius: 8px;
          background-color: #f5f3ff;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        input:focus, select:focus {
          outline: none;
          border-color: #836fff;
          box-shadow: 0 0 6px rgba(131, 111, 255, 0.3);
          background-color: #fff;
        }

        .button-group {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        button {
          flex: 1;
          padding: 10px 16px;
          margin: 0 5px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: 0.3s ease;
          color: white;
        }

        button[type="submit"] {
          background: linear-gradient(90deg, #7a5fff, #82a0ff);
        }

        button[type="submit"]:hover {
          background: linear-gradient(90deg, #6a4dff, #6c8cff);
          box-shadow: 0 0 8px rgba(122,95,255,0.4);
        }

        .btn-clear {
          background: linear-gradient(90deg, #c77dff, #9d4edd);
        }

        .btn-clear:hover {
          background: linear-gradient(90deg, #b86cff, #7b2cbf);
          box-shadow: 0 0 8px rgba(157,78,221,0.4);
        }

        input::placeholder {
          color: #8c7aff;
        }

        @media (max-width: 480px) {
          .container {
            padding: 20px;
          }

          button {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default CadastrarMesa;
