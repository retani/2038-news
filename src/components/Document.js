import React from 'react'
import styled from 'styled-components'

import { snippets, colors, metrics, breakpoints } from '../../config/styles'

export default ({children}) =>  <Center>
    <Container>
      {children}
    </Container>
  </Center>

const Container = styled.div`
  background-color: ${ colors.white };
  width: 66.66%;
  @media ${ breakpoints.large } {
  min-width: 600px;
  max-width: 1333px;
  }
  /*max-width: 440px; /* Textbreite 400px */
  @media ${ breakpoints.tiny } {
    /*max-width: 780px; /* Textbreite 700px */
    /*margin-left: 120px;
    margin-right: 120px;*/
    width: calc( 100% - 40px);
  }
`

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`