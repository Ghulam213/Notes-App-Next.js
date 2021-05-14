import { roboto, dark } from '@theme-ui/presets';

const LigthTheme = {
    ...roboto,
    containers: {
        card: {
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            border: '1px solid',
            borderColor: 'muted',
            borderRadius: '4px',
            p: 2,
        },
        page: {
            width: '100%',
            maxWidth: '960px',
            m: 0,
            mx: 'auto',
        },
    },
    styles: {
        ...roboto.styles,
    },
};

const DarkTheme = {
    ...dark,
    containers: {
        card: {
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            border: '1px solid',
            borderColor: 'muted',
            borderRadius: '4px',
            p: 2,
        },
        page: {
            width: '100%',
            maxWidth: '960px',
            m: 0,
            mx: 'auto',
        },
    },
    styles: {
        ...dark.styles,
    },
};

export { LigthTheme, DarkTheme };
