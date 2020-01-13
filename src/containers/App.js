import React, { useState } from 'react';
import './App.scss';
import { THEME, ThemeService } from '../styles/ThemeService';
import MyExperience from '../components/MyExperience';
import MyContact from '../components/MyContact';
import MyCareer from '../components/MyCareer';
import MyEdu from '../components/MyEdu';
import MySkills from '../components/MySkills';
import MyFAQ from '../components/MyFAQ';
import MyNav from '../components/MyNav';

export default function App(props) {
  const themeClassName = {
    base: 'App',
    LIGHT: 'App--light',
    DARK: 'App--dark',
  };

  const { _window } = props;
  const themeService = ThemeService(_window.localStorage);
  themeService.register();

  const [theme, setTheme] = useState({
    isLight: themeService.get() === THEME.LIGHT,
    appClassName: `${themeClassName.base} ${
      themeClassName[themeService.get()]
    }`,
  });

  function toggleTheme() {
    const isLight = !theme.isLight;
    setTheme({
      isLight,
      appClassName: `${themeClassName.base} ${
        isLight ? themeClassName.LIGHT : themeClassName.DARK
      }`,
    });
    themeService.set(isLight ? THEME.LIGHT : THEME.DARK);
  }

  return (
    <div className={theme.appClassName}>
      <MyNav
        print={_window.print.bind(_window)}
        isLightTheme={theme.isLight}
        toggleTheme={toggleTheme}
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
