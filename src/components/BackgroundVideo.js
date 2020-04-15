import React, { useState } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'

import { vimeoIdValid } from '../helpers/validators'
import { dist, colors, breakpoints } from '../../config/styles'

let timeoutHandler = null

const MainVideo = ({vimeoId, children}) => { 
  return (
    <Container missingVideoId={!vimeoIdValid(vimeoId)}>
      { vimeoId && <Vimeo
          style={{
            position:"relative",
            /*top:"50%"*/
          }}
          video={vimeoId}
          autopause={false}
          responsive
          play={true}
          loop
          controls={false}
          volume={0}
          autoplay={true}
          muted={true}
        /> 
      }
      {children}
    </Container>
  )
}

export default MainVideo

const Container = styled.div`
  box-sizing: content-box;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background: ${ props => props.missingVideoId ? "red" : "rgba(0,0,0,0.1)"};
  position: relative;
` 
