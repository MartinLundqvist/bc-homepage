const Theme = {
  colors: {
    bgHighlight: '#133040',
    bg: '#0b192e',
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
