import React from 'react'
import styled from 'styled-components'

export default function({ label, show, children }) {
  show = show || process.env.NODE_ENV === "development"
  return <Wrapper>
    { show && <Label>{label}</Label> }
    { children}
  </Wrapper>
}

const Wrapper = styled.div`
  position: relative;
  overflow:hidden;
  display: block;
`

const Label = styled.div`
  position: absolute;
  left:0;
  transform: rotate(270deg) translateX(calc(-100% - 3px));
  transform-origin: 0 0;
  top:0;
  padding:0px;
  opacity: 0.15;
  z-index:100;
`