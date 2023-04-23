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
    logo: '#000',
    headline: '#DC14FF',
    subHeadline: '#0000FF',
    body: '#000',
    smallBody: '#000'
  },
}

export const engineeringDarkTheme = {
  ...baseTheme,
  discipline: 'engineering',
  mode: 'dark',
  colors: {
    appBackground: '#000',
    logo: '#FFF',
    headline: '#39FF14',
    subHeadline: '#FFF',
    body: '#FFF',
    smallBody: '#FFF'
  },
}

export const designTheme = {
  ...baseTheme,
  discipline: 'design',
  colors: {
    appBackground: '#FDFDCA',
    logo: '#B23013',
    headline: '#B23013',
    subHeadline: '#B23013',
    body: '#B23013',
    smallBody: '#B23013'
  },
}

export const designDarkTheme = {
  ...baseTheme,
  discipline: 'design',
  colors: {
    appBackground: '#2F2C41',
    logo: '#B59B6E',
    headline: '#B59B6E',
    subHeadline: '#B59B6E',
    body: '#B59B6E',
    smallBody: '#B59B6E'
  },
}

export const a11yTheme = {
	...baseTheme,
	discipline: 'a11y',
	colors: {
    appBackground: '#FFF',
    logo: '#000',
    headline: '#000',
    subHeadline: '#000',
    body: '#000',
    smallBody: '#000'
  },
}

export const a11yDarkTheme = {
	...baseTheme,
	discipline: 'a11y',
	colors: {
    appBackground: '#000',
    logo: '#FFF',
    headline: '#FFF',
    subHeadline: '#FFF',
    body: '#FFF',
    smallBody: '#FFF'
  },
}