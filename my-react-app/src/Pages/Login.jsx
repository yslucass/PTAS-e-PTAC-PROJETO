import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tentando login com\nEmail: ${email}\nSenha: ${senha}`);
    // Aqui você integraria com backend/autenticação real
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
