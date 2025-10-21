import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Reservas de Mesas</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/perfil" style={styles.link}>Perfil</Link>
        <Link to="/reservas" style={styles.link}>Reservas</Link>
        <Link to="/cadastrar-mesa" style={styles.link}>Cadastrar Mesa</Link>
        <Link to="/reservar-mesa" style={styles.link}>Reservar Mesa</Link>
        <Link to="/Login" style={styles.link}>Login</Link>
        <Link to="/Cadastro" style={styles.link}>Cadastro</Link>
        <Link to="/Atualizar-Perfil" style={styles.link}>Atualizar Perfil</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#004080',
    padding: '15px',
    color: 'white',
    textAlign: 'center'
  },
  title: {
    margin: '0 0 10px 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Header;
