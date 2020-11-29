import React from 'react';
import { THEME } from '../api/theme.store';

const ThemeContext = React.createContext(THEME.LIGHT);
export default ThemeContext;
