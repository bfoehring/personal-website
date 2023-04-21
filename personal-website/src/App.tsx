/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          background: 'appBackground',
          height: '100vh',
          width: '100vw'
        }}
      >
        hello world
      </div>
    </ThemeProvider>
  );
}

export default App;
