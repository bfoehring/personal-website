/** @jsxImportSource theme-ui */

import { ThemeProvider, useColorMode } from 'theme-ui'
import { engineeringTheme, designTheme } from './theme'
import { PropsWithChildren, useState } from 'react'

const ModeToggle = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mode, setMode] = useColorMode();

  return (
    <select onChange={(e) => setMode(e.target.value)}>
      <option>default</option>
      <option>dark</option>
    </select>
  )
}

const AppWrap: React.FC<PropsWithChildren> = ({children}) => {
  const appWrapStyles = {
    background: 'appBackground',
    height: '100vh',
    width: '100vw'
  }
  
  return(
    <div sx={appWrapStyles}>{children}</div>
  )
}

function App() {
  const [discipline, setDiscipline] = useState('engineering');
  const disciplineLogic = discipline === 'engineering' ? engineeringTheme : designTheme;

  return (
    <ThemeProvider theme={disciplineLogic}>
      <AppWrap>
        <button onClick={() => setDiscipline('design')}>design</button>
        <button onClick={() => setDiscipline('engineering')}>engineering</button>
        <ModeToggle />
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;

{/* <div
sx={{
  background: 'appBackground',
  height: '100vh',
  width: '100vw'
}}
>
</div> */}
