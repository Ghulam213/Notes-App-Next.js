import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import { LigthTheme, DarkTheme } from '../theme';

import Nav from '../src/Components/nav';

const THEMES = {
    LIGTH: 'ligth',
    DARK: 'dark',
};

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState(THEMES.DARK);

    const toggleTheme = () => {
        setTheme((prev) =>
            prev === THEMES.LIGTH ? THEMES.DARK : THEMES.LIGTH
        );
    };

    return (
        <ThemeProvider theme={theme === THEMES.LIGTH ? LigthTheme : DarkTheme}>
            <div>
                <Nav themeToggler={toggleTheme} />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
