import { useState, useEffect, useRef } from 'react';
import './Nav.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);

  return (
    <nav id="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref} id="services">
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
