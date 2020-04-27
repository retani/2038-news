import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import { p as P } from './HtmlElements'

export default ({children, href, text, textOffset, theme, size="small"}) =>  {

  return <A href={href} title={href} download>
      <Button textOffset={textOffset} size={size} theme={theme}>
        {text}
      </Button>
    </A>
}

const Container = styled.span`

`

const A = styled.a`
  overflow: hidden;
  display: block;
  text-align: center;
  letter-spacing: 0.02em;
`