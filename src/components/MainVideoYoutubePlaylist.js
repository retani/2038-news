import React, { useState } from 'react'
import styled from 'styled-components'

import { dist, colors, breakpoints } from '../../config/styles'

const MainVideo = ({ youtubePlaylistId }) => {

  return <Container>
      <iframe
        src={"https://www.youtube-nocookie.com/embed/videoseries?list=" + youtubePlaylistId}
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </Container>
}

export default MainVideo

const Container = styled.div`
  margin-bottom: ${dist.spacer};
  @media ${ breakpoints.small} {
    margin-bottom: ${dist.smallSpacer};
  }
  box-sizing: content-box;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background: rgba(0,0,0,0.1);
  position: relative;
  cursor: pointer;
  iframe {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`
