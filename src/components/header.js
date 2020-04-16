import React from 'react'
import styled from 'styled-components'

import { colors, dist, metrics, breakpoints } from '../../config/styles'
import Spacer from './Spacer'


export function Header ({children, backgroundColor, color, style, beforeText}) {
  return (
    <Head backgroundColor={backgroundColor} style={style} beforeText={beforeText}>
      <HeadText backgroundColor={color} color={backgroundColor}>
        {children}
      </HeadText>
    </Head>
  )
}

const Head = styled.h2`
  height: 60px;
  background-color: ${ ({backgroundColor}) => backgroundColor || colors.blue };
  text-align: center;
  cursor: pointer;
  user-select: none;
  font-size: ${ metrics.veryLarge.fontSizePx }px;
  line-height: 57px;
  &::before {
  content: "${ ({beforeText}) => beforeText }";
    position: absolute;
    left: ${dist.spacer};
    @media ${ breakpoints.small } {
      left: ${dist.smallSpacer};
    }
  }
`

const HeadText = styled.span`
  display: inline-block;
  height: 100%;
  padding-left: ${ dist.letterWidth };
  padding-right: ${ dist.letterWidth };
  background-color: ${ ({backgroundColor}) => backgroundColor || colors.white };
  color: ${ ({color}) => color | colors.blue };
  font-weight: 500;
`
