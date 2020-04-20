import React from "react"
import styled from 'styled-components'

import BackgroundVideo from "../components/BackgroundVideo"
import { BlockListItem } from '../components'

import {   
  typoSizes,
  typoStyles,
  typoSnippet,  } from '../../config/styles'

const blockLabel = "LANDSCAPE"

export function Landscape({ data }) {
  const {text, videoId } = data
  return (
    <Container>
      <BackgroundVideo vimeoId={videoId} />
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.span`
  ${ 
    typoSnippet({ 
      typoSize: typoSizes.videoLoop, 
      typoStyle: typoStyles.NeueHaasUnicaBold
    }) 
  };
  text-align: center;
`

export const LandscapeBlock = {
  label: blockLabel,
  name: "landscape",
  id:"landscape",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),
  defaultItem: {
    videoId: "115845843",
    text: "legal bodies",
  },
  fields: [
    { name: "videoId", label: "Vimeo Video ID", component: "text" },
    { name: "text", label: "Text", component: "text" },
  ],
}
