import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';
// eslint-disable-next-line arrow-body-style
const Menu = () => {
  return (
    <nav className="menu-container">
      <h1 className="menu-title">Math Magicians 🧙‍♂️</h1>
      <ul className="menu-links-container">
        <li><NavLink end className={({ isActive }) => (isActive ? 'activeLink' : 'desactiveLink')} to="/">Home</NavLink></li>
        <li><NavLink end className={({ isActive }) => (isActive ? 'activeLink' : 'desactiveLink')} to="/calculate">Calculator</NavLink></li>
        <li><NavLink end className={({ isActive }) => (isActive ? 'activeLink' : 'desactiveLink')} to="/quotes">Quotes</NavLink></li>
      </ul>
    </nav>
  );
};

export default Menu;
