import { Theme } from '@mui/material';

const palette: Theme['palette'] = {
  mode: 'dark',
  primary: {
    main: '#ffc107',
    light: '#66B2FF',
    dark: '#0059B2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  divider: 'rgba(194, 224, 255, 0.08)',
  background: { default: '#001E3C', paper: '#0A1929' },
  common: { black: '#1D1D1D', white: '#fff' },
  text: {
    primary: '#fff',
    secondary: '#B2BAC2',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  grey: {
    '50': '#F3F6F9',
    '100': '#E7EBF0',
    '200': '#E0E3E7',
    '300': '#CDD2D7',
    '400': '#B2BAC2',
    '500': '#A0AAB4',
    '600': '#6F7E8C',
    '700': '#3E5060',
    '800': '#2D3843',
    '900': '#1A2027',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  error: {
    main: '#EB0014',
    light: '#FF99A2',
    dark: '#C70011',
    contrastText: '#fff',
  },
  success: {
    main: '#1DB45A',
    light: '#6AE79C',
    dark: '#1AA251',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  warning: {
    main: '#DEA500',
    light: '#FFDC48',
    dark: '#AB6800',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#d500f9',
    light: 'rgb(221, 51, 250)',
    dark: 'rgb(149, 0, 174)',
    contrastText: '#fff',
  },
  info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0288d1',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
	// augmentColor: (options) => {
	// },
	// getContrastText: (background) => {
	// }
};

export default palette;
