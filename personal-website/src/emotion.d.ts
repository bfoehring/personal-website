import '@emotion/react'

declare module '@emotion/react' {
  export interface IBaseTheme {
    fontSizes: {
      headline: string,
      subHeadline: string,
      body: string,
      smallBody: string,
    },
    lineHeights: {
      headline: string,
      subHeadline: string,
      body: string,
      smallBody: string,
    }
  }
  export interface Theme extends IBaseTheme {
    discipline: string,
    mode?: string,
    colors: {
      appBackground: string,
      logo: string,
      headline: string,
      subHeadline: string,
      body: string,
      smallBody: string,
    },
  }
}