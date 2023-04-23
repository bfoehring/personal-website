import styled from "@emotion/styled"

const BaseTextStyles = styled.span`
  font-family: ${({theme}) => theme.discipline === 'engineering' ? '"IBM Plex Mono", monospace' : '"Helvetica", sans-serif'};
  font-weight: normal;
  transition: all .25s;
`

const Headline = styled(BaseTextStyles)<iText>`
  font-size: ${({theme}) => theme.fontSizes.headline};
  color: ${({theme}) => theme.colors.headline};
	margin: 0px;

	&::before {
		content: "${({before}) => before}";
	}

	@media (max-width: 800px) {
		font-size: 48px;
		&::before {
			content: "";
		}
	}
`

const SubHeadline = styled(BaseTextStyles)`
  font-size: ${({theme}) => theme.fontSizes.subHeadline};
  line-height: ${({theme}) => theme.lineHeights.subHeadline};
  color: ${({theme}) => theme.colors.subHeadline};
  background: ${({theme}) => theme.mode ? 'blue' : undefined};
  margin: 0px;
  width: fit-content;
`

const Body = styled(BaseTextStyles)`
  font-size: ${({theme}) => theme.fontSizes.body};
  color: ${({theme}) => theme.colors.body};
`

const SmallBody = styled(BaseTextStyles)`
  font-size: ${({theme}) => theme.fontSizes.smallBody};
  color: ${({theme}) => theme.colors.smallBody};
`

interface iText extends React.PropsWithChildren {
  size?: string,
  //as?: React.ElementType,
	before?: string
}

export const Text: React.FC<iText> = ({children, size, before}) => {

  const textType = (size: iText['size'], before: iText['before']) => {
    switch (size) {
      case 'headline':
        return <Headline as={'h1'} before={before}>{children}</Headline>;
      case 'subHeadline':
        return <SubHeadline as='h2'>{children}</SubHeadline>;
      case 'smallBody':
        return <SmallBody as='p'>{children}</SmallBody>
      default:
        return <Body as='p'>{children}</Body>
    }
  }

  return textType(size, before);
}