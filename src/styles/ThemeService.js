export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

export function ThemeService(localStorage) {
  const key = 'theme';
  function register() {
    if (!get()) {
      set(THEME.LIGHT);
    }
  }

  function get() {
    return localStorage.getItem(key);
  }

  function set(theme) {
    if (!THEME.hasOwnProperty(theme)) {
      throw new TypeError(`'${theme}' is not recognized as a theme`);
    }
    localStorage.setItem(key, theme);
  }
  return {
    get,
    set,
    register,
  };
}
