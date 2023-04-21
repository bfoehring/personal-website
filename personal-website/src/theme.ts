import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    appBackground: '#fff',
    modes: {
      engineering: {
        dark: {
          appBackground: '#000',
        }
      },
      design: {
        appBackground: '#FDFDCA',
        dark: {
          appBackground: '#2F2C41'
        }
      }
    }
  },
}