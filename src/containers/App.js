import React from 'react';
import './App.scss';
import { MyCard } from '../components/MyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';

function App(props) {
  const { _window } = props;
  const iconSize = '2x';
  return (
    <div className="App">
      <header>
        <MyCard title="">
          <div className="header__body">
            <h1>Andrew Le</h1>
            <ul>
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
                <a onClick={_window.print.bind(_window)}>
                  <FontAwesomeIcon icon={faPrint} size={iconSize} />
                </a>
              </li>
            </ul>
          </div>
        </MyCard>
      </header>
    </div>
  );
}

export default App;
