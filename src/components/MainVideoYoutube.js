import React, { useState } from 'react'
import styled from 'styled-components'

import { dist, colors, breakpoints } from '../../config/styles'
import ButtonLarge from './ButtonLarge'



const MainVideo = ({vimeoId}) => { 
  const [loaded, setLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [hover, setHover] = useState(false);

  return  <Container>
      <Iframe src="https://www.youtube.com/embed/rLIJj1W3G9I"/>
    </Container>
}

export default MainVideo

const Container = styled.div`
  margin-bottom: ${dist.spacer};
  @media ${ breakpoints.small } {
    margin-bottom: ${dist.smallSpacer};
  }
  box-sizing: content-box;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background: rgba(0,0,0,0.1);
  position: relative;
  cursor: pointer;
` 

const Iframe = styled.iframe`
position:absolute;
  width:100%;
  height:100%;
`
