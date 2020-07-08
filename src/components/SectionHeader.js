import React from 'react'
import styled from 'styled-components'

import { colors, dist, spaces, metrics, breakpoints, typoSizes, typoStyles, typoSnippet } from '../../config/styles'
import Spacer from './Spacer'


export default ({children, backgroundColor, color, style, beforeText}) => {
  console.log(backgroundColor)
  return (
    <Head backgroundColor={backgroundColor} style={style} beforeText={beforeText}>
      <HeadText backgroundColor={color} color={backgroundColor}>
        {children}
      </HeadText>
    </Head>
  )
}

export const Head = styled.h2`
  height: ${ spaces.large.px.l+"px" };
  font-size: ${typoSizes.sectionHeader.fontSizePx.l + "px"};
  line-height: ${typoSizes.sectionHeader.lineHeightPx.l + "px"};
  @media ${ breakpoints.small } {
    height: ${ spaces.large.px.s+"px" };
    font-size: ${typoSizes.sectionHeader.fontSizePx.s + "px"};
    line-height: ${typoSizes.sectionHeader.lineHeightPx.s + "px"};
  }

  font-family: ${ typoStyles.RobotoMonoMedium.name };
  font-weight: ${ typoStyles.RobotoMonoMedium.weight };

  background-color: ${ ({backgroundColor}) => backgroundColor || colors.blue };
  text-align: center;
  cursor: pointer;
  user-select: none;

  &::before {
  content: "${ ({beforeText}) => beforeText }";
    position: absolute;
    left: ${dist.spacer};
    @media ${ breakpoints.small } {
      left: ${dist.smallSpacer};
    }
  }
`

export const HeadText = styled.span`
  display: inline-block;
  height: 100%;
  padding-left: ${ dist.letterWidth };
  padding-right: ${ dist.letterWidth };
  background-color: ${ ({backgroundColor}) => backgroundColor || colors.white };
  color: ${ ({color}) => color | colors.blue };
`
