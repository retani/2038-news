import React from 'react'
import styled from 'styled-components'
import { useCMS } from 'tinacms'

export default function({ label, show, children }) {
  //const cms = useCMS()
  show = /*( show || cms.sidebar.isOpen ) && */ process.env.NODE_ENV === "development"
  //console.log(cms.sidebar.hidden, "SIDEBAR")
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