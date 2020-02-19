import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { THEME } from '../api/theme.store';
import MyExperience from '../components/MyExperience';
import MyContact from '../components/MyContact';
import MyCareer from '../components/MyCareer';
import MyEdu from '../components/MyEdu';
import MySkills from '../components/MySkills';
import MyFAQ from '../components/MyFAQ';
import MyNav from '../components/MyNav';

export default function App(props) {
  const themeStore = props.appCtx.store.theme;
  const [theme, setTheme] = useState({
    isLight: themeStore.get() === THEME.LIGHT,
  });

  function toggleTheme() {
    const isLight = !theme.isLight;
    setTheme({
      isLight,
    });
    themeStore.set(isLight ? THEME.LIGHT : THEME.DARK);
  }

  return (
    <div className={`App App--${theme.isLight ? 'light' : 'dark'}`}>
      <MyNav
        print={props.appCtx.print}
        isLightTheme={theme.isLight}
        toggleTheme={toggleTheme}
      />
      <main>
        <MyExperience />
        <MyContact />
        <MyCareer />
        <MyEdu />
        <MySkills />
        {/*<MyFAQ />*/}
      </main>
    </div>
  );
}

App.propTypes = {
  appCtx: PropTypes.shape({
    store: PropTypes.shape({
      theme: PropTypes.shape({
        get: PropTypes.func,
        set: PropTypes.func,
      }),
    }),
    print: PropTypes.func,
  }),
};
