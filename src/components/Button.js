import React from 'react'
import styled from 'styled-components'

import { metrics, dist, breakpoints, colors, typoStyles, typoSizes, fontSnippet } from '../../config/styles'

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
  "black-on-white": {
    "linkFg": colors.white,
    "linkBg": colors.black,
    "hoverFg":colors.white,    
    "hoverBg": colors.black,
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
    typoSize: typoSizes.buttonSmall,
    l: {
      //width: "138px",
      paddingSidePx: "13px",
      borderRadiusPx: typoSizes.buttonSmall.lineHeightPx.l/2 +"px",
    },
    s: {
      //width: "138px",
      paddingSidePx: "8px",
      borderRadiusPx: typoSizes.buttonSmall.lineHeightPx.s/2 +"px",
    }    
  },
  large: {
    typoSize: typoSizes.button,
    l: {
      //width: "138px",
      paddingSidePx: "22px",
      borderRadiusPx: typoSizes.button.lineHeightPx.l/2 +"px",
    },
    s: {
      //width: "138px",
      paddingSidePx: "15px",
      borderRadiusPx: typoSizes.button.lineHeightPx.s/2 +"px",
    }    
  }
}

export default ({children, onClick, style, theme, textOffset, serious, disabled, size="small"}) => {
  console.log(disabled, textOffset)
  return (
    <Container 
        size={sizes[size]} 
        theme={theme && themes[theme] ? themes[theme] : themes[themes.default]} 
        onClick={onClick} 
        style={style}
        disabled={disabled}
        serious={serious}>
      <Text offset={textOffset}>{children}</Text>
    </Container>
  )
}

const Container = styled.span`
  display: inline-block;
  position: relative;
  overflow: hidden;

  background-color: ${ ({theme}) => theme.linkBg };
  color: ${ ({theme}) => theme.linkFg };

  transition: all 0.3s !important;

  /*width: ${({size}) => size.width};*/
  /*margin-bottom :${({size}) => size.marginBottom};
  position: relative;*/

  ${ ({size}) => fontSnippet({
    typoStyle: typoStyles.RobotoMonoMedium,
    typoSize: size.typoSize
  })}

  padding: 0 ${({size}) => size.l.paddingSidePx};
  border-radius: ${({size}) => size.l.borderRadiusPx};

  @media ${ breakpoints.small } {
    padding: 0 ${({size}) => size.s.paddingSidePx};
    border-radius: ${({size}) => size.s.borderRadiusPx};
  }

  ${ props => props.disabled && "pointer-events: none;" }

  &:hover {
    cursor: pointer;
    ${({theme, serious, size}) => serious ? `
      background-color: ${theme.hoverBg };
      color: ${ theme.hoverFg };    
    ` :
    `
      transition: none !important;
      background-color: ${ theme.linkBg };
      color: ${ theme.linkBg };
      &::before {
        content: "👀";
        font-size: 120%; /* arbitrary value depending on emoji and os */
        line-height: ${ size.height};
        position: absolute;
        top: 5%; /* arbitrary value depending on emoji and os */
        left: 50%;
        transform: translateX(-50%);
        z-index:1;
      }    
    `    
    }
  }
`

const Text = styled.span`
  position: relative;
  text-align: center;
  left: ${ ({offset}) => offset };
`