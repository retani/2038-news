import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { snippets } from '../../config/styles'

export default function() {
  return <Container>
      <Link to="/">back</Link>
    </Container>
}

const Container = styled.div`
  ${snippets.blockStyle}
`