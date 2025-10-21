import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(senha !== confirmaSenha){
      alert('Senhas não coincidem!');
      return;
    }
    alert(`Cadastro realizado:\nNome: ${nome}\nEmail: ${email}`);
    // Aqui você integraria com backend de cadastro
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input 
            type="text" 
            value={nome}
            onChange={e => setNome(e.target.value)}
            required 
            placeholder="Digite seu nome"
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
            placeholder="Digite seu email"
          />
        </label>
        <br /><br />
        <label>
          Senha:
          <input 
            type="password" 
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required 
            placeholder="Digite sua senha"
          />
        </label>
        <br /><br />
        <label>
          Confirmar Senha:
          <input 
            type="password" 
            value={confirmaSenha}
            onChange={e => setConfirmaSenha(e.target.value)}
            required 
            placeholder="Confirme sua senha"
          />
        </label>
        <br /><br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
