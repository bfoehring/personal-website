import { Text } from './Text'
import styled from '@emotion/styled'

const StyledPipe = styled.div`
	margin: 0px 16px;
`

export const Pipe = () => <Text size='smallBody'><StyledPipe>|</StyledPipe></Text>