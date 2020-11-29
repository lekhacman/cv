import ThemeStore, { THEME } from './theme.store';

describe('Theme Storage', function() {
  const themeStore = ThemeStore(window);

  it('should self-initialize', function() {
    expect(themeStore.get()).toEqual(THEME.LIGHT);
  });

  it('should set theme', function() {
    themeStore.set(THEME.DARK);
    expect(themeStore.get()).toEqual(THEME.DARK);
  });

  it('should not override current theme', function() {
    const otherIntanceOfThemeStore = ThemeStore(window);
    expect(otherIntanceOfThemeStore.get()).toEqual(THEME.DARK);
  });

  it('should throw error if theme not found', function() {
    expect(function() {
      themeStore.set('YEAH');
    }).toThrow();
  });
});
