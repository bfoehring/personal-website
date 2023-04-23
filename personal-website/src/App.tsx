/** @jsxImportSource @emotion/react */
import './app.css'
import { 
  engineeringTheme, 
  designTheme, 
  engineeringDarkTheme, 
  designDarkTheme 
} from './theme'
import { useState, useEffect, ReactElement } from 'react'
import { ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Sun, Moon, Cursor } from './icons/Icon'
import { Text } from './Text'
import { Logo } from './Logo'
import { HeadlineButton, SmallBodyButton } from './Button'
import { Link } from './Link'

const ModeToggle = ({mode, setMode}: {mode: string, setMode: React.Dispatch<string>}) => {

  const setModeIcon = (mode: string | undefined): ReactElement => {
    switch (mode) {
      case 'light':
        return <Moon />
      case 'dark':
        return <Sun />
      default:
        return <Sun />
    }
  }

  const checkMode = (mode: string) => {
    if (mode === 'light') {
      return 'dark';
    }

    if (mode === 'dark') {
      return 'light';
    }

    return ''
  }

  return (
    <SmallBodyButton onClick={() => setMode(checkMode(mode))}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {
          setModeIcon(mode)
        }
        <div css={{marginLeft: '8px'}}>
          Mode
        </div>
      </div>
    </SmallBodyButton>
  )
}

const AppWrap = styled.div`
  background: ${({theme}) => theme.colors.appBackground};
  height: 100vh;
  width: 100vw;
  transition: all .25s;
`

const AppContent = styled.article`
  box-sizing: border-box;
  max-width: 1400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px auto;
  padding: 80px 0px;
	transition: all .25s;

	@media (max-width: 800px), (max-height: 400px) {
		margin: 0px;
  	padding: 20px;
	}
`

const AppFooter = styled.footer`
	display: flex;
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
          <AppContent>
            <header>
              <Logo />
            </header>
            <section
							css={css`
								padding: 24px 0px;
							`}
						>
              {
                discipline === 'engineering' ?
                <div
                  css={css`
										display: flex;
										margin-bottom: 64px;
										@media (max-width: 800px) {
											flex-direction: column;
										}

										@media (max-height: 400px) {
											margin-bottom: 24px;
										}
									`
									}
                >
                  <HeadlineButton onClick={() => setDiscipline('design')}>design</HeadlineButton>
                  {/* eslint-disable-next-line no-octal-escape */}
                 <Text size='headline' before="\00a0">+ engineering</Text>
                </div> :
                <div
									css={css`
										display: flex;
										margin-bottom: 64px;
										@media (max-width: 800px) {
											flex-direction: column;
										}
									`
									}
                >
                  <Text size='headline'>design +&nbsp;</Text>
                  <HeadlineButton onClick={() => setDiscipline('engineering')}>engineering</HeadlineButton>
                </div>
              }
              <Text size='subHeadline'>design engineer, systems</Text>
							<div
								css={{display: 'flex'}}
							>
								<Link size='subHeadline' href='https://seeds.sproutsocial.com/'>seeds.sproutsocial.com</Link>
								<Cursor discipline={discipline} />
							</div>
            </section>
            <AppFooter>
              <ModeToggle mode={mode} setMode={setMode}/>
							<Text size='smallBody'>&nbsp;|&nbsp;</Text>
							<Link size='smallBody' href='https://github.com/bfoehring'>Github</Link>
							<Text size='smallBody'>&nbsp;|&nbsp;</Text>
							<Link size='smallBody' href='https://www.linkedin.com/in/billfoehring'>LinkedIn</Link>
							<Text size='smallBody'>&nbsp;|&nbsp;</Text>
							<Link size='smallBody' href='mailto:bill.foehring@gmail.com'>Contact</Link>
            </AppFooter>
          </AppContent>
        </AppWrap>
      </ThemeProvider>
  );
}

export default App;
