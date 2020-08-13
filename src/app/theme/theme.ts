export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: 'light',
    properties: {
        '--primary-light': '#e9e9eb',
        '--secondary-light': '#ed7a7a',
        '--primary-dark': '#da0000',
        '--secondary-dark': '#7b0000',
        '--background-message': '#7b0000'
    }
};

export const dark: Theme = {
    name: 'dark',
    properties: {
        '--primary-light': '#e9e9eb',
        '--secondary-light': '#777',
        '--primary-dark': '#1e5266',
        '--secondary-dark': '#111',
        '--background-message': '#3d3c3c'
    }
};
