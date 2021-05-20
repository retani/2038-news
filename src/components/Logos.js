import React from 'react'
import styled from 'styled-components'

import { dist, breakpoints,spaces } from '../../config/styles'

export default ({imgSrcLarge = "/logos.png", imgSrcSmall = "/logosSmall.png"}) =>  <Container>
  <ImgLarge src={imgSrcLarge}/>
  <ImgSmall src={imgSrcSmall}/>
</Container>

const Container = styled.div`
  display: block;
  padding-left: ${ spaces.small.px.l }px;
`

const ImgLarge = styled.img`

  display: block;
  @media ${ breakpoints.small } {
    display: none;
  }  
`

const ImgSmall = styled.img`
  display: none;
  @media ${ breakpoints.small } {
    display: block;
  }  
`