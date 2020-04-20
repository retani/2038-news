import React from 'react'
import styled from 'styled-components'

import { typoStyles } from '../../config/styles'

export default function({ label, preview }) {
  return <>
    <span>{label}&nbsp;&nbsp;</span>
    <Preview>{preview}</Preview>
  </>
}

const Preview = styled.span`
  font-family: ${ typoStyles.RobotoMonoRegular.name };
  font-weight: ${ typoStyles.RobotoMonoRegular.weight };
`