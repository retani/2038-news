import React, { Fragment, useRef } from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from '../../config/styles'

export default function({text, typoSize, color}) {
  let out =[]
  let groups = text
    .split("{")
    .map( g => g.split("}") )
  if (groups.length > 0) {
    for (let gg of groups) {
      if (gg.length > 1) {
        out.push(<mark>{gg[0]}</mark>)
        out.push(<span>{gg[1]}</span>)
      } else {
        out.push(<span>{gg[0]}</span>)
      }
    }
  }
  const fragment = out.map(c => <Fragment key={c.props.children}>{c}</Fragment>)
  //console.log(out);
  return <Span>
      <Container>
        {fragment}
      </Container>
      <Container2 color={color || colors.mark} aria-hidden="true" lineHeightPx={typoSize ? typoSize.lineHeightPx : {l:2,s:1}}>
          {fragment}
      </Container2>      
    </Span>
  //return text.replace(/\{/, '<mark>').replace(/\}/, '</mark>')  
}

const Span = styled.span`
  display: block;
  position: relative;
`

const Container = styled.span`
  /*outline: 1px red solid;*/
  position: relative;
  z-index: 1;
  mark {
    background-color: transparent;
  }
`

const Container2 = styled.span`
  /*outline: 1px black solid;*/
  position: absolute;
  left:0;
  top: ${ props => props.lineHeightPx.l * 0.05 }px; 
  @media ${ breakpoints.small } {
    top: ${ props => props.lineHeightPx.s * 0.05 }px; 
  }

  color: transparent;
  mark {
    color: rgba(0,0,0,0);
    background-color: ${ ({color}) => color };
  }
`