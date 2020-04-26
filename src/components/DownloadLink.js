import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import { p as P } from './HtmlElements'

export default ({children, href, text, textOffset, theme, size="small"}) =>  {

  return <Container>
    <a href={href} download>
      <Button textOffset={textOffset} size={size} theme={theme}>
        {text}
      </Button>
    </a>
  </Container>
}

const Container = styled.span`
  display: block;
  text-align: center;
  letter-spacing: 0.02em;
`

