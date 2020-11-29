import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMoon,
  faPhone,
  faPrint,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import './MyNav.scss';
import PropTypes from 'prop-types';
import { THEME } from '../api/theme.store';
import ThemeContext from '../ctx/ThemeContext';

function MyNav(props) {
  const { toggleTheme, print } = props;
  const ICON_SIZE = '2x';
  const icon = useContext(ThemeContext) === THEME.LIGHT ? faMoon : faSun;

  return (
    <header>
      <div>
        <h1>Andrew Le</h1>
      </div>
      <div>
        <ul>
          <li>
            {/*eslint-disable-next-line*/}
            <button data-testid="theme-icon" onClick={toggleTheme}>
              <FontAwesomeIcon icon={icon} size={ICON_SIZE} />
            </button>
          </li>
          <li>
            <a href="mailto:lekhacman@outlook.com">
              <FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE} />
            </a>
          </li>
          <li>
            <a href="tel:+6587686989">
              <FontAwesomeIcon icon={faPhone} size={ICON_SIZE} />
            </a>
          </li>
          <li>
            {/*eslint-disable-next-line*/}
            <a href="#" onClick={print}>
              <FontAwesomeIcon icon={faPrint} size={ICON_SIZE} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

MyNav.propTypes = {
  print: PropTypes.func,
  toggleTheme: PropTypes.func,
};

export default MyNav;
