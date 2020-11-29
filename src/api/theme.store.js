/**
 * Enum for Theme values
 * @readonly
 * @enum {string}
 */
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

/**
 *
 * @param {Storage} localStorage
 * @param {function} matchMedia
 * @return {{set: set, get: (function(): THEME)}}
 */
function ThemeStore({ localStorage, matchMedia }) {
  const key = 'theme';
  /**
   * Get current theme
   * @returns {THEME}
   */
  function get() {
    return localStorage.getItem(key);
  }

  /**
   * Set theme
   * @param {THEME} theme
   */
  function set(theme) {
    if (!THEME.hasOwnProperty(theme.toUpperCase())) {
      throw new TypeError(`'${theme}' is not recognized as a theme`);
    }
    localStorage.setItem(key, theme);
  }

  // Self-initialize theme value
  if (!get()) {
    let preferDark = false;
    try {
      preferDark = matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (err) {}
    set(preferDark ? THEME.DARK : THEME.LIGHT);
  }

  return {
    get,
    set,
  };
}

export default ThemeStore;
