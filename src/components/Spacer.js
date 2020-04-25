import React from 'react'
import styled from 'styled-components'

import { dist, breakpoints } from '../../config/styles'

export default ({children, space, debug, onlySmall}) => <Container 
  onlySmall={onlySmall}
  space={space}
  debug={debug}
  >
    {children}
    {debug && "Spacer " + space.px.l + "/" + space.px.s}
</Container>

const Container = styled.div`
  height: ${ props => props.space ? props.space.px.l+"px" : dist.spacer };
  @media ${ breakpoints.small } {
    height: ${ props => props.space ? props.space.px.s+"px" : dist.spacer };
  }
  ${ ({onlySmall}) => onlySmall && `
    display: none;
    @media ${ breakpoints.small } {
      display: block;
  }`}
  overflow:hidden;
  ${ props => props.debug && "font-size: 50%; background-color:red;"}
`

