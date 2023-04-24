 import styled from "@emotion/styled"
 import { Text } from './Text'
import { ReactElement } from "react"

const StyledLink = styled.a<ILink>`
	text-decoration: none;
	color: ${({theme, size = 'body'}) => theme.colors[size]};
	transition: all.25s;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}

	&:visited {
		color: ${({theme, size = 'body'}) => theme.colors[size]};
	}
`

interface ILink extends React.PropsWithChildren {
  size?: 'smallBody' | 'body' | 'subHeadline',
  href: string
}

export const Link: React.FC<ILink> = ({size = 'body', href, children}): ReactElement => {
	return (
		<Text size={size}>
			<StyledLink size={size} href={href} target='_blank' rel='noreferrer'>{children}</StyledLink>
		</Text>
	);
}