import {createText, BaseTheme} from '@shopify/restyle';

const theme = {
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.7)',
    white: 'white',
    body: 'rgba(12, 13, 52, 0.05)',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontWeight: '600',
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontWeight: '600',
      color: 'title',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      color: 'text',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
