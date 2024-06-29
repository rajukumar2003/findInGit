import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => { },
    lightTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('dark');

    const darkTheme = () => setThemeMode('dark');
    const lightTheme = () => setThemeMode('light');

    // Changing the <html> element's class attribute
    useEffect(() => {
        document.documentElement.className = themeMode === 'dark' ? 'dark-mode' : 'light-mode';
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function useTheme() {
    return useContext(ThemeContext);
}
