import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

import MainVideo from '../components/MainVideo'
import {p as P, Block} from '../components/HtmlElements'
import { 
  BlockListItem, 
  BlockWrapper } from '../components'

import { snippets, colors } from '../../config/styles'
import { genericFields } from '../helpers/misc'

const blockLabel = "Subpage VIDEO"

export function StandaloneVideo({ data }) {
  const {videoId, hide} = data
  return (
    <BlockWrapper label={blockLabel} hide={hide}>
      <Container>
        <Back>
          <Link to="/">2038</Link>
        </Back>
        <VideoContainer>
          <MainVideo vimeoId={videoId} style={{marginBottom: 0}}/>
        </VideoContainer>
      </Container>
    </BlockWrapper>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  top:0;
  left: 0;
  background-color: black;
  position: fixed;
  display: flex;
  align-items: center;
  place-content: center;
`

const VideoContainer = styled.div`
  width: 100%;
  max-width: calc( 100vh * 16 / 9 );
`

const Back = styled.div`
  ${snippets.blockStyle}
  position: absolute;
  top:0;
  left:0;
  * {
    color: ${colors.turquoise};
  }
  //text-shadow: 0.1ex 0.1ex 0.1em #0005;
  z-index: 1;
`

export const StandaloneVideoBlock = {
  label: blockLabel,
  name: "standaloneVideo",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} hide={item.hide} />,
  }),  
  defaultItem: {
    videoId: "370256053",
  },
  fields: [
    { name: "videoId", label: "Vimeo Video ID", component: "text" },
    ...genericFields
  ],
}
