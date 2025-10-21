import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reservas from './Pages/Reservas';
import CadastrarMesa from './Pages/CadastrarMesa';
import ReservarMesa from './Pages/ReservarMesa';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import AtualizarPerfil from './Pages/AtualizarPerfil';
import Perfil from './Pages/Perfil';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Reservas" element={<Reservas />} />
      <Route path="/cadastrar-mesa" element={<CadastrarMesa />} />
      <Route path="/reservar-mesa" element={<ReservarMesa />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/Atualizar-Perfil" element={<AtualizarPerfil/>} />
      <Route path="/Perfil" element={<Perfil/>} />
    </Routes>
  );
}

export default AppRoutes;
