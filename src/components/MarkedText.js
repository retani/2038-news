import React, { Fragment } from 'react'
import styled from 'styled-components'

import { colors } from '../../config/styles'

export default function({text}) {
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
  //console.log(out);
  return <Container>{out.map(c => <Fragment key={c.props.children}>{c}</Fragment>)}</Container>
  //return text.replace(/\{/, '<mark>').replace(/\}/, '</mark>')  
}

const Container = styled.span`
  mark {
    background-color: ${ colors.mark }
  }
`