/**
 * Enum for Theme values
 * @readonly
 * @enum {string}
 */
export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

/**
 * Theme Storage
 * @param {Storage} localStorage
 * @returns {{set: setTheme, get: getTheme}}
 */
function ThemeStore(localStorage) {
  const key = 'theme';
  /**
   * Get current theme
   * @typedef getTheme
   * @returns {string}
   */
  function get() {
    return localStorage.getItem(key);
  }

  /**
   * Set theme
   * @typedef setTheme
   * @param {string} theme
   */
  function set(theme) {
    if (!THEME.hasOwnProperty(theme)) {
      throw new TypeError(`'${theme}' is not recognized as a theme`);
    }
    localStorage.setItem(key, theme);
  }

  // Self-initialize theme value
  if (!get()) {
    set(THEME.LIGHT);
  }

  return {
    get,
    set,
  };
}

export default ThemeStore;
