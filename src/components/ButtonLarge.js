import React from 'react'
import styled from 'styled-components'

import { metrics, dist } from '../../config/styles'

export default ({children, onClick, style, highlight, color}) => {
  return <Container onClick={onClick} style={style} highlight={highlight} bgColor={color}>
    {children}
  </Container>
}

const Container = styled.div`
  display: inline-block;
  width: 138px;
  height: ${ dist.largeButtonHeight };
  position: relative;
  background-color: ${ ({bgColor}) => bgColor || "#FFFFFF" };
  border-radius: 30px;
  color: black;
  font-size: ${ metrics.veryLarge.fontSizePx }px;
  line-height: ${ dist.largeButtonHeight };
  mix-blend-mode: screen;
  transition: all 0.15s;
  opacity: ${ ({highlight}) => highlight ? 0.8 : 0.65 };
`
