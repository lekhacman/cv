import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faPrint,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import './MyNav.scss';
import PropTypes from 'prop-types';

export function MyNav(props) {
  const { print, toggleTheme } = props;
  const iconSize = '2x';
  return (
    <header>
      <div>
        <h1>Andrew Le</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#" onClick={toggleTheme}>
              <FontAwesomeIcon icon={faMoon} size={iconSize} />
            </a>
          </li>
          <li>
            <a href="mailto:lekhacman@outlook.com">
              <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
            </a>
          </li>
          <li>
            <a href="tel:+6587686989">
              <FontAwesomeIcon icon={faPhone} size={iconSize} />
            </a>
          </li>
          <li>
            <a href="#" onClick={print}>
              <FontAwesomeIcon icon={faPrint} size={iconSize} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

MyNav.propTypes = {
  print: PropTypes.func,
  isLightTheme: PropTypes.bool,
  toggleTheme: PropTypes.func,
};
