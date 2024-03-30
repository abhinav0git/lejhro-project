import './Navbar.css';
import thelogo from '../assets/lejhro_logo_white.png'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/innovations">Innovations</a>
          </li>
          <div class="vr"></div>
          <li className="nav-item">
            <a className="nav-link" href="/business-services">Business Services</a>
          </li>
          <div class="vr"></div>
          <li className="nav-item">
            <a className="nav-link" href="/financial-services">Financial Services</a>
          </li>
          <div class="vr"></div>
          <li className="nav-item">
            <a className="nav-link" href="http://www.bootcamp.lejhro.com/" target="_blank" rel="noreferrer">Bootcamp</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;