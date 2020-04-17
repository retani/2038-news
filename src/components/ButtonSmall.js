import React from 'react'
import styled from 'styled-components'

import { metrics, dist, colors, textStyle } from '../../config/styles'

const themes={
  "white-on-blue": {
    "linkFg": colors.white,
    "linkBg": colors.blue,
    "hoverFg":colors.blue,    
    "hoverBg": colors.white,
  },
  "blue-on-white": {
    "linkFg": colors.blue,
    "linkBg": colors.white,
    "hoverFg":colors.white,    
    "hoverBg": colors.blue,
  },  
  "light":{
    "linkFg": colors.white,
    "linkBg": colors.grey1,
    "hoverFg":colors.white,    
    "hoverBg": colors.grey2,
  },
  default: "white-on-blue"
}

const sizes={
  small: {
    width: "70px",
    height: dist.smallButtonHeight,
    borderRadius: "30px",
    marginBottom: "5px",
    fontSize: metrics.medium.fontSizePx + "px",
    lineHeight: dist.smallButtonHeight,
  },
  large: {
    width: "138px",
    height: dist.largeButtonHeight,
    borderRadius: "30px",
    marginBottom: "0px",
    fontSize: metrics.veryLarge.fontSizePx + "px",
    lineHeight: dist.largeButtonHeight,
  }
}

export default ({children, onClick, style, theme, textOffset, size="small"}) => {
  return <Container size={sizes[size]} theme={theme && themes[theme] ? themes[theme] : themes[themes.default]} onClick={onClick} style={style}>
      <Text offset={textOffset}>{children}</Text>
  </Container>
}

const Container = styled.span`
  display: inline-block;
  width: ${({size}) => size.width};
  height: ${({size}) => size.height};
  margin-bottom :${({size}) => size.marginBottom};
  position: relative;
  border-radius: ${({size}) => size.borderRadius};
  background-color: ${ ({theme}) => theme.linkBg };
  color: ${ ({theme}) => theme.linkFg };
  font-size: ${({size}) => size.fontSize};
  line-height: ${({size}) => size.lineHeight};
  transition: all 0.3s !important;
  &:hover {
    background-color: ${ ({theme}) => theme.hoverBg };
    color: ${ ({theme}) => theme.hoverFg };
    cursor: pointer;
  }
`

const Text = styled.span`
  position: relative;
  font-weight: 500;
  left: ${ ({offset}) => offset };
`