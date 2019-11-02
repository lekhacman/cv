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

export class MyNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const { toggleTheme, isLightTheme, print } = this.props;
    const { menu } = this.state;
    const iconSize = '2x';

    return (
      <header>
        <nav>
          <div>
            <h1>Andrew Le</h1>
          </div>
          <div>
            <button
              className={`hamburger hamburger--spin ${
                menu ? 'is-active' : null
              }`}
              type="button"
              onClick={this.toggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </nav>
        <div
          className={`actions ${menu ? 'animated flipInX' : ''}`}
          style={{ display: menu ? null : 'none' }}
        >
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
}

MyNav.propTypes = {
  print: PropTypes.func,
  isLightTheme: PropTypes.bool,
  toggleTheme: PropTypes.func,
};
