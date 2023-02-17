import { useState } from 'react';
import './Nav.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav id="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li id="services">
          <button
            type="button"
            onClick={() => setDropdown((prev) => !prev)}
          >
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
