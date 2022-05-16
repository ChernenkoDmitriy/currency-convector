import React, { createContext, useState, useMemo, FC, useEffect } from 'react';
import { IColors, IThemeObj } from './entities/IColors';
import { IThemesContext } from './entities/IThemesContext';
import { TTheme } from './entities/TTheme';
const THEMES_JSON: IThemeObj = require('./themes.json');

export const ThemesContext = createContext<IThemesContext>({
    colors: THEMES_JSON[THEMES_JSON.INITIAL_THEME],
    theme: THEMES_JSON.INITIAL_THEME,
    setTheme: (_) => { },
    availableThemes: THEMES_JSON.AVAILABLE_THEMES,
});

export const ThemesProvider: FC = ({ children }) => {
    const [availableThemes, setAvailableThemes] = useState<TTheme[]>(THEMES_JSON.AVAILABLE_THEMES);
    const [theme, setTheme] = useState<TTheme>(THEMES_JSON.INITIAL_THEME);
    const [colors, setColors] = useState<IColors>(THEMES_JSON[theme]);

    const appContext = useMemo(() => ({ colors, theme, setTheme, availableThemes }), [colors, theme, availableThemes]);

    useEffect(() => {
        if (THEMES_JSON[theme]) {
            setColors(THEMES_JSON[theme]);
        };
    }, [theme])

    return (
        <ThemesContext.Provider value={appContext}>
            {children}
        </ThemesContext.Provider>
    );
};