import React from 'react'
import styled from 'styled-components'

import ButtonSmall from './ButtonSmall'
import { p as P } from './HtmlElements'

export default ({children, href, text, textOffset, theme, size="small"}) =>  {

  return <Container>
    <a href={href} download>
      <ButtonSmall textOffset={textOffset} size={size} theme={theme}>
        {text}
      </ButtonSmall>
    </a>
  </Container>
}

const Container = styled(P)`
  text-align: center;
  letter-spacing: 0.02em;
`

