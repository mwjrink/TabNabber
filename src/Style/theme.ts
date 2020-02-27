
export function themeGenerator(dark: boolean) {
    return ({
        colors: {
            primary: dark ? '#536dfe' : '#3d5afe',
            primaryVariant: dark ? '#0043ca' : '#0031ca',
            onPrimaryVariant: dark ? '#FFFFFF' : '#000000',
            onPrimary: dark ? '#000000' : '#FFFFFF',
            secondary: dark ? '#b388ff' : '#cfd8dc',
            secondaryVariant: dark ? '#FFFFFF' : '#000000',
            onSecondaryVariant: dark ? '#b388ff' : '#9ea7aa',
            onSecondary: dark ? '#000000' : '#000000',
            background: dark ? '#121212' : '#E5E5E5',//'#FFFFFF',
            onBackground: dark ? '#FFFFFF' : '#000000',
            surface: dark ? '#121212' : '#FFFFFF',
            onSurface: dark ? '#FFFFFF' : '#000000',
            error: dark ? '#cf6679' : '#b00020',
            onError: dark ? '#000000' : '#ffffff',

            // Not sure what to call this, its like subtitle in lighter grey because its slightly out of focus kind of thing
            unfocused: '#9e9e9e',
            unfocusedDark: '#707070',
            unfocusedLight: '#cfcfcf',
        },
        // font-family: 'Open Sans', ;
        // font-family: 'Montserrat', ;
        // font-family: 'Roboto', ;
        text: {
            fonts: ["'Montserrat'", "'Open Sans'"],
            Headline1: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '96px',
                fontWeight: '300',
                letterSpacing: '-1.5px'
            },
            Headline2: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '60px',
                fontWeight: '300',
                letterSpacing: '-0.5px'
            },
            Headline3: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '48px',
                fontWeight: '400',
                letterSpacing: '0px'
            },
            Headline4: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '34px',
                fontWeight: '400',
                letterSpacing: '0.25px'
            },
            Headline5: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '24px',
                fontWeight: '400',
                letterSpacing: '0px'
            },
            Headline6: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '20px',
                fontWeight: '500',
                letterSpacing: '0.15px'
            },
            Subtitle1: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '0.15px'
            },
            Subtitle2: {
                fontFamily: "'Roboto'", // "'Montserrat'",
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.1px'
            },
            Body1: {
                fontFamily: "'Roboto'", // "'Open Sans'",
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '0.5px'
            },
            Body2: {
                fontFamily: "'Roboto'", // "'Open Sans'",
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '0.25px'
            },
            Button: {
                fontFamily: "'Roboto'", // "'Open Sans'",
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '1.25px'
            },
            Caption: {
                fontFamily: "'Roboto'", // "'Open Sans'",
                fontSize: '12px',
                fontWeight: '400',
                letterSpacing: '0.4px'
            },
            Overline: {
                fontFamily: "'Roboto'", // "'Open Sans'",
                fontSize: '10px',
                fontWeight: '400',
                letterSpacing: '1.5px'
            }
        },
        spacing: {
            // column: '70',
            gutter: '16px', // as percentage of popup size?
            margin: '16px',
        },
        layout: {
            columns: 4,
            // width: 360, // relative to?
        },
        animation: {
            inSpeed: '0.25s',
            inTimingFn: 'cubic-bezier(0.0, 0.0, 0.2, 1);',
            outSpeed: '0.2s',
            outTimingFn: 'cubic-bezier(0.4, 0.0, 1, 1);',
        }
    });
}

