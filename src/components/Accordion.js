import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { colors, dist, spaces, metrics, breakpoints, typoSizes, typoStyles, typoSnippet } from '../../config/styles'
import Spacer from './Spacer'

let firstMount = true

export default ({children, head, contentStyle, backgroundColorClosed, backgroundColorOpen, style, initOpen}) =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  
  let innerContentElem = useRef(null)

  const backgroundColor = backgroundColorClosed && backgroundColorOpen ? ( isOpen ? backgroundColorOpen : backgroundColorClosed ) : null

  const toggle = () => {
    //console.log(innerContentElem)
    setHeight(!isOpen ? innerContentElem.current.clientHeight + "px" : 0)
    setIsOpen(!isOpen, )
  }

  const updateDimensions = () => {
    if (isOpen) {
      setHeight("auto")
    }
  }

  useEffect(() => {

    if (typeof initOpen != "undefined") {
      if (initOpen && !isOpen && firstMount) {
        //console.log("set open")
        setTimeout(()=>{
        toggle()
        firstMount = false
      },1000)
      }
    }

    window.addEventListener("resize", updateDimensions);
    return( () => window.removeEventListener("resize", updateDimensions))
  }, [updateDimensions])

  return <Container backgroundColor={backgroundColor} style={style}>
    <Head isOpen={isOpen} onClick={toggle}>
      <HeadText isOpen={isOpen}>
        {head}
      </HeadText>
    </Head>
    <Content isOpen={isOpen} height={height}>
      <InnerContent ref={innerContentElem} style={contentStyle}>
        {children}
      </InnerContent>
    </Content>
  </Container>
}

const Container = styled.div`
  margin-bottom: ${dist.spacer};
  @media ${ breakpoints.small } {
    margin-bottom: ${dist.smallSpacer};
  }
  ${ ({backgroundColor}) => backgroundColor && `
    &, > *, h2 span {
      background-color: ${ backgroundColor } !important;
      color: black;
    }
  `}
  * {
    transition: background-color 0.35s, height 0.6s;
  }
`

const Head = styled.h2`
  height: ${ spaces.large.px.l+"px" };
  font-size: ${typoSizes.sectionHeader.fontSizePx.l + "px"};
  line-height: ${typoSizes.sectionHeader.lineHeightPx.l + "px"};
  @media ${ breakpoints.small } {
    height: ${ spaces.large.px.s+"px" };
    font-size: ${typoSizes.sectionHeader.fontSizePx.s + "px"};
    line-height: ${typoSizes.sectionHeader.lineHeightPx.s + "px"};
  }
  background-color: ${ ({isOpen}) => isOpen ? colors.blue : colors.white };
  text-align: center;
  cursor: pointer;
  user-select: none;

  &::before {
  content: "${ ({isOpen}) => isOpen ?  "-" : "+" }";
    position: absolute;
    left: ${dist.spacer};
    @media ${ breakpoints.small } {
      left: ${dist.smallSpacer};
    }
  }
`

const HeadText = styled.span`
  display: inline-block;
  height: 100%;
  padding-left: ${ dist.letterWidth };
  padding-right: ${ dist.letterWidth };
  background-color: ${ ({isOpen}) => isOpen ? colors.white : colors.blue };
  color: ${ ({isOpen}) => isOpen ? colors.blue : colors.white };
  font-weight: 500;
`

const Content = styled.div`
  overflow: hidden;
  height: ${ ({height}) => height };
  box-sizing: border-box;
  div { 
    ${ ({isOpen}) => isOpen ? null : "background-color:transparent !important;"};
    transition: background-color 1s;
  }
`

const InnerContent = styled.div`
`