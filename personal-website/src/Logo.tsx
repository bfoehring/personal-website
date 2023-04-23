/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif, "Helvetica Neue";
  font-size: ${({theme}) => theme.fontSizes.body};
  color: ${({theme}) => theme.colors.body};
  transition: all .25s;

  svg {
    fill: ${({theme}) => theme.colors.logo};
    transition: fill .25s;
  }
`

export const Logo = () => {

  return (
    <LogoContainer>
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M32 0H0V32H32V0ZM5.33333 5.33335H16V16L5.33333 5.33335ZM21.3424 16C24.2837 15.9951 26.6667 13.6092 26.6667 10.6667C26.6667 7.72116 24.2788 5.33335 21.3333 5.33335V16V16V26.6667C24.2788 26.6667 26.6667 24.2789 26.6667 21.3333C26.6667 18.3908 24.2837 16.0049 21.3424 16Z" />
      </svg>
      <div css={{
        marginLeft: '16px'
      }}>
        billy foehring
      </div>
    </LogoContainer>
  )
}