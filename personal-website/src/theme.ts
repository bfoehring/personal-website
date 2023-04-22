//import type { Theme } from 'theme-ui'

const baseTheme = {
  fontSizes: {
    headline: '64px',
    subHeadline: '32px',
    body: '24px',
    smallBody: '16px',
  },
  lineHeights: {
    headline: '64px',
    subHeadline: '41px',
    body: '24px',
    smallBody: '16px',
  }
}

export const engineeringTheme = {
  ...baseTheme,
  discipline: 'engineering',
  colors: {
    appBackground: '#FFF',
    headline: '#DC14FF',
    subHeadline: '#0000FF',
    body: '#000'
  },
}

export const engineeringDarkTheme = {
  ...baseTheme,
  discipline: 'engineering',
  mode: 'dark',
  colors: {
    appBackground: '#000',
    headline: '#39FF14',
    subHeadline: '#FFF',
    body: '#FFF'
  },
}

export const designTheme = {
  ...baseTheme,
  discipline: 'design',
  colors: {
    appBackground: '#FDFDCA',
    headline: '#B23013',
    subHeadline: '#B23013',
    body: '#B23013'
  },
}

export const designDarkTheme = {
  ...baseTheme,
  discipline: 'design',
  colors: {
    appBackground: '#2F2C41',
    headline: '#B59B6E',
    subHeadline: '#B59B6E',
    body: '#B59B6E'
  },
}