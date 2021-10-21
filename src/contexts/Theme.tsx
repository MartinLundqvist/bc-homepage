const Theme = {
  colors: {
    bg: '#030201',
    bgHighlight: '#081a28',
    bgLighter: '#0a0704',
    bgTransparent: '#03020185',
    primary: '#dfdbec',
    darker: '#bbb3d1',
    highlight: '#D89922',
  },
  colors_dynamic: {
    bg: '#2F4455',
    bgHighlight: '#677f91',
    bgLighter: '#516777',
    bgTransparent: '#2F445585',
    primary: '#e8d5d9',
    darker: '#c4a4ac',
    highlight: '#DB7A93',
  },
  colors_warm: {
    bg: '#D8C3A4',
    bgHighlight: '#b79e78',
    bgLighter: '#f1e3ce',
    bgTransparent: '#D8C3A485',
    primary: '#444341',
    darker: '#605f57',
    highlight: '#E7594F',
  },
  colors_brittany: {
    bg: '#0b192e',
    bgHighlight: '#133040',
    bgLighter: '#112240',
    bgTransparent: '#0b192e85',
    primary: '#ccd6f6',
    darker: '#8892b0',
    highlight: '#64fcda',
  },

  dimensions: {
    header: '100px',
    sidePadding: '100px',
    sidePaddingNarrow: '20px',
    navButtonHeight: '48px',
    navButtonWidth: '120px',
  },

  fonts: {
    small: '16px',
    regular: 'clamp(16px, 18px, 20px)',
    large: '26px',
    xlarge: 'clamp(26px, 2vw, 32px)',
    xxlarge: 'clamp(40px, 8vw, 80px)',
  },

  mediaThreshold: '1000px',
};

export type ThemeType = typeof Theme;

export default Theme;
