// @ts-nocheck
import './app.css'
import { 
  engineeringTheme, 
  designTheme, 
  engineeringDarkTheme, 
  designDarkTheme 
} from './theme'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { Text } from './Text'

const ModeToggle = ({setMode}: {setMode: React.Dispatch<string>}) => {
  return (
    <select onChange={(e) => setMode(e.target.value)}>
      <option>light</option>
      <option>dark</option>
    </select>
  )
}

const AppWrap = styled.div`
  background: ${({theme}) => theme.colors.appBackground};
  height: 100vh;
  width: 100vw;
  transition: all .25s;
`

function App() {
  const [discipline, setDiscipline] = useState('engineering');
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState(engineeringTheme);

  useEffect(() => {
    if (mode === 'light') {
      if (discipline === 'design') {
        setTheme(designTheme);
        return;
      }
      setTheme(engineeringTheme);
      return;
    }

    if (mode === 'dark') {
      if (discipline === 'design') {
        setTheme(designDarkTheme);
        return;
      }
      setTheme(engineeringDarkTheme);
      return;
    }
  }, [discipline, mode])

  return (
      <ThemeProvider theme={theme}>
        <AppWrap>
          <button onClick={() => setDiscipline('design')}>design</button>
          <button onClick={() => setDiscipline('engineering')}>engineering</button>
          <ModeToggle setMode={setMode}/>
          <Text size='headline'>design + engineering</Text>
          <Text size='subHeadline'>design engineer, systems</Text>
          <Text size='subHeadline'>seeds.sproutsocial.com</Text>
        </AppWrap>
      </ThemeProvider>
  );
}

export default App;
