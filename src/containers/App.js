import React from 'react';
import './App.scss';
import { MyNav } from '../components/MyNav';
import { THEME, ThemeService } from '../styles/ThemeService';
import { MyExperience } from '../components/MyExperience';
import { MyContact } from '../components/MyContact';
import { MyCareer } from '../components/MyCareer';
import { MyEdu } from '../components/MyEdu';
import { MySkills } from '../components/MySkills';
import { MyFAQ } from '../components/MyFAQ';

const theme = {
  base: 'App',
  LIGHT: 'App--light',
  DARK: 'App--dark',
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    const { _window } = props;
    this.themeService = ThemeService(_window.localStorage);
    this.themeService.register();
    this.state = {
      theme: {
        isLight: this.themeService.get() === THEME.LIGHT,
        appClassName: `${theme.base} ${theme[this.themeService.get()]}`,
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
    this.themeService.set(isLight ? THEME.LIGHT : THEME.DARK);
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
        <main>
          <MyExperience />
          <MyContact />
          <MyCareer />
          <MyEdu />
          <MySkills />
          <MyFAQ />
        </main>
      </div>
    );
  }
}

export default App;
