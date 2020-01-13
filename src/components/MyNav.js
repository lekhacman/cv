import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faPrint,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import './MyNav.scss';
import PropTypes from 'prop-types';

export default function MyNav(props) {
  const { toggleTheme, isLightTheme, print } = props;
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
              {isLightTheme ? (
                <FontAwesomeIcon icon={faMoon} size={iconSize} />
              ) : (
                <FontAwesomeIcon icon={faSun} size={iconSize} />
              )}
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
