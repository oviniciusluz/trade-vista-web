import './index.scss'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <section>
      <nav className="main-nav">
        <div className="top-header">
          <Link to="/" className="logo">
            <img src="/assets/logo.png" alt="Logo" />
          </Link>
          <input
            type="text"
            placeholder="Navegue, explore e conquiste seu mundo de compras online"
            className="search-input"
          />
        </div>
        <div className="home-options">
          <Link to="/" className="nav-link">
            Os mais vendidos
          </Link>
          <Link to="/" className="nav-link">
            Oferta do Dia
          </Link>
          <Link to="/" className="nav-link">
            Livro
          </Link>
          <Link to="/" className="nav-link">
            Música
          </Link>
          <Link to="/" className="nav-link">
            Eletrônicos
          </Link>
          <Link to="/" className="nav-link">
            Computadores
          </Link>
          <Link to="/" className="nav-link">
            Casa
          </Link>
          <Link to="/" className="nav-link">
            Beleza
          </Link>
          <Link to="/" className="nav-link">
            Games
          </Link>
        </div>
      </nav>

      <section className="advertisement">
        <img src="/advertisement/summer.png" alt="Summer Advertisement" />
      </section>
    </section>
  )
}

export default HomeScreen
