// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <MUIThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
                <AppContainer>
                    <Routes />
                </AppContainer>
            </MUIThemeProvider>
        </ThemeProvider>
    );
};
