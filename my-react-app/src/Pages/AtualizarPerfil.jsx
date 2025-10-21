import React, { useState } from 'react';

function AtualizarPerfil() {
  const [nome, setNome] = useState('João Silva'); // pode puxar dados atuais
  const [email, setEmail] = useState('joao@email.com');
  const [telefone, setTelefone] = useState('11999999999');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Perfil atualizado:\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`);
    // Aqui você integraria com backend para atualizar dados
  };

  return (
    <div>
      <h2>Atualizar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input 
            type="text" 
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Email:
          <input 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Telefone:
          <input 
            type="tel" 
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="(XX) XXXXX-XXXX"
          />
        </label>
        <br /><br />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default AtualizarPerfil;
