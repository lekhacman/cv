import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { THEME } from '../api/theme.store';
import MyExperience from '../components/MyExperience';
import MyContact from '../components/MyContact';
import MyEdu from '../components/MyEdu';
import MySkills from '../components/MySkills';
// import MyFAQ from '../components/MyFAQ';
import MyNav from '../components/MyNav';
import ThemeContext from '../ctx/ThemeContext';
import MyCareer from '../components/MyCareer';

export default function App(props) {
  const themeStore = props.appCtx.store.theme;
  const [state, setState] = useState({
    theme: themeStore.get(),
  });

  function toggleTheme() {
    const theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setState({ theme });
    themeStore.set(theme);
  }

  return (
    <div className={`App App--${state.theme}`}>
      <ThemeContext.Provider value={state.theme}>
        <MyNav print={props.appCtx.print} toggleTheme={toggleTheme} />
        <main>
          <MyExperience />
          <MyContact />
          <MyCareer />
          <MyEdu />
          <MySkills />
          {/*<MyFAQ />*/}
        </main>
      </ThemeContext.Provider>
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
