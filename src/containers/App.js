import React from 'react';
import './App.scss';
import { MyNav } from '../components/MyNav';
import { THEME, ThemeService } from '../styles/ThemeService';

const theme = {
  base: 'App',
  LIGHT: 'App--light',
  DARK: 'App--dark',
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    const { _window } = props;
    const themeService = ThemeService(_window.localStorage);
    themeService.register();
    this.state = {
      theme: {
        isLight: themeService.get() === THEME.LIGHT,
        appClassName: `${theme.base} ${theme[themeService.get()]}`,
      },
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    const isLight = !this.state.theme.isLight;
    this.setState({
      theme: {
        isLight,
        appClassName: `${theme.base} ${isLight ? theme.LIGHT : theme.DARK}`,
      },
    });
  }

  render() {
    const { _window } = this.props;
    const { appClassName, isLight } = this.state.theme;

    return (
      <div className={appClassName}>
        <MyNav
          print={_window.print.bind(_window)}
          isLightTheme={isLight}
          toggleTheme={this.toggleTheme}
        />
      </div>
    );
  }
}

export default App;
