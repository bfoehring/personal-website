/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import { Text } from './Text'
import { ReactEventHandler } from "react"

const Button = styled.button<IButton>`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme, size = 'body'}) => theme.colors[size]};
  transition: all .25s;
  padding: 0px;
`

interface IButton extends React.PropsWithChildren {
  onClick: ReactEventHandler,
  size?: 'smallBody' | 'body' | 'subHeadline' | 'headline'
}

export const HeadlineButton: React.FC<IButton> = ({children, onClick}) => {
  return (
    <Button css={{ textDecoration: 'underline'}} size='headline' onClick={onClick}>
      <Text size='headline'>
        {children}
      </Text>
    </Button>
  )
}

export const SmallBodyButton: React.FC<IButton> = ({children, onClick}) => {
  return (
    <Button size='smallBody' onClick={onClick}>
      <Text size='smallBody'>
        {children}
      </Text>
    </Button>
  )
}