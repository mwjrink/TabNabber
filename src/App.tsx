import { Popout } from './Pages/Popout/Popout';
import { Manager } from './Pages/Manager/Manager';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeGenerator } from './Style/theme';
import { CreateSettingsContext, Settings } from './utils';
import { GlobalStyles } from './Style/Global.Styled';
import './App.css';

interface AppProps {
    popout: boolean;
}

// ICON IS A BOOK WITH LOTS OF STICKIES AND SHIT OUT THE SIDE
// goblin/smeagle looking hand holding it?

function App({ popout }: AppProps) {
    const settings: Settings = {
        closeTabs: false,
        includePinnned: false,
        width: 450,
        height: 600, // max for chrome extension
        ignoreNewtabs: false,
        unsuspendTabs: true,
    };

    const theme = themeGenerator(false);
    const SettingsContext = CreateSettingsContext(settings);

    return (
        <SettingsContext.Provider value={settings}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles settingsWidth={`${settings.width}px`} settingsHeight={`${settings.height}px`} />
                    <>{popout ? <Popout /> : <Manager />}</>
                </>
            </ThemeProvider>
        </SettingsContext.Provider>
    );
}

export default App;