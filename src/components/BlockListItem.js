import React from 'react'
import styled from 'styled-components'

import { typoStyles } from '../../config/styles'

export default function({ label, preview, hide }) {
  return <>
    <Label hide={hide}>{label}&nbsp;&nbsp;</Label>
    <Preview hide={hide}>{preview}</Preview>
  </>
}

const Label = styled.span`
  ${({ hide }) => hide && "text-decoration: line-through; opacity: 0.5"};
`

const Preview = styled.span`
  ${({ hide }) => hide && "text-decoration: line-through; opacity: 0.5" };
  font-family: ${ typoStyles.RobotoMonoRegular.name };
  font-weight: ${ typoStyles.RobotoMonoRegular.weight };
`