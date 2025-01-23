declare module "@mui/material/styles" {
  interface Palette {
    tertiary?: {
      main: string;
    };
    quaternary?: {
      main: string;
    };
    quinary?: {
      main: string;
    };
    light?: string;
    dark?: string;
    gray?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
    youtube?: string;
    pinterest?: string;
    overlays?: {
      white0: string;
      white10: string;
      white15: string;
      white25: string;
      white50: string;
      white75: string;
      black0: string;
      black50: string;
    };
    border?: {
      default: string;
      variant1: string;
      variant2: string;
      variant3: string;
      variant4: string;
    };
  }

  interface PaletteOptions {
    tertiary?: {
      main: string;
    };
    quaternary?: {
      main: string;
    };
    quinary?: {
      main: string;
    };
    light?: string;
    dark?: string;
    gray?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
    youtube?: string;
    pinterest?: string;
    overlays?: {
      white0: string;
      white10: string;
      white15: string;
      white25: string;
      white50: string;
      white75: string;
      black0: string;
      black50: string;
    };
    border?: {
      default: string;
      variant1: string;
      variant2: string;
      variant3: string;
      variant4: string;
    };
  }
}

export const palette = {
  primary: {
    main: '#086AD8', 
  },
  secondary: {
    main: '#9acd32',
  },
  tertiary: {
    main: 'aqua', 
  },
  quaternary: {
    main: 'plum', 
  },
  quinary: {
    main: 'beige', 
  },
  common: {
    white: '#FFFFFF', 
    black: '#000000',
  },
  light: '#FFFFFF',
  dark: '#000000', 
  gray: '#999999',
  facebook: '#3A5795',
  twitter: '#55C5FB',
  instagram: '#E34078',
  linkedin: '#5BA6E0',
  whatsapp: '#25d366',
  youtube: '#CC181E',
  pinterest: '#D70004',
  text: {
    primary: '#FFFFFF',
    secondary: '#999999',
    disabled: '#bbbbbb',
  },
  background: {
    default: '#999999', 
    paper: '#DDDDDD', 
  },
  border: {
    default: '#dddddd', 
    variant1: 'aqua', 
    variant2: 'blue', 
    variant3: 'green',
    variant4: 'red',
  },
  overlays: {
    white0: 'rgba(255, 255, 255, 0)',
    white10: 'rgba(255, 255, 255, .1)',
    white15: 'rgba(255, 255, 255, .15)', 
    white25: 'rgba(255, 255, 255, .25)', 
    white50: 'rgba(255, 255, 255, .5)', 
    white75: 'rgba(255, 255, 255, .75)', 
    black0: 'rgba(0, 0, 0, 0)', 
    black50: 'rgba(0, 0, 0, .5)',
  },
};