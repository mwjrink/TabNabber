
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

            // arrow & subtext: 727272
        },
        text: {
            fonts: ['Montserrat', 'Open Sans'],
            Headline1: {
                font: 'Montserrat',
                fontSize: '96px',
                fontWeight: '300',
                letterSpacing: '-1.5px'
            },
            Headline2: {
                font: 'Montserrat',
                fontSize: '60px',
                fontWeight: '300',
                letterSpacing: '-0.5px'
            },
            Headline3: {
                font: 'Montserrat',
                fontSize: '48px',
                fontWeight: '400',
                letterSpacing: '0px'
            },
            Headline4: {
                font: 'Montserrat',
                fontSize: '34px',
                fontWeight: '400',
                letterSpacing: '0.25px'
            },
            Headline5: {
                font: 'Montserrat',
                fontSize: '24px',
                fontWeight: '400',
                letterSpacing: '0px'
            },
            Headline6: {
                font: 'Montserrat',
                fontSize: '20px',
                fontWeight: '500',
                letterSpacing: '0.15px'
            },
            Subtitle1: {
                font: 'Montserrat',
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '0.15px'
            },
            Subtitle2: {
                font: 'Montserrat',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.1px'
            },
            Body1: {
                font: 'Open Sans',
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '0.5px'
            },
            Body2: {
                font: 'Open Sans',
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '0.25px'
            },
            Button: {
                font: 'Open Sans',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '1.25px'
            },
            Caption: {
                font: 'Open Sans',
                fontSize: '12px',
                fontWeight: '400',
                letterSpacing: '0.4px'
            },
            Overline: {
                font: 'Open Sans',
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

