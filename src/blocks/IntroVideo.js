import React from "react"
import styled from 'styled-components'

import MainVideo from '../components/MainVideo'
import {p as P, Block} from '../components/HtmlElements'
import { BlockListItem } from '../components'

import { colors, spaces, typoSizes, typoStyles, blockTypoSnippet } from '../../config/styles'

const blockLabel = "INTRO VIDEO"

export function IntroVideo({ data }) {
  const {text,text2,videoId} = data
  return (
    <Container>
      <MainVideo vimeoId={videoId} />
      <Block
        typoSize={typoSizes.medium}
        typoStyle={typoStyles.RobotoMonoRegular}  
        spaceBottom={spaces.medium}
      >
        {text}
      </Block>
      <SmallText>
        {text2}
      </SmallText>
    </Container>
  )
}

const Container = styled.div``

const SmallText = styled(P)`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleSmall, 
      typoStyle: typoStyles.RobotoMonoRegular,
      spaceBottom: spaces.large,
    }) 
  };
  color: ${ colors.blue };
  text-align: center;
`

export const IntroVideoBlock = {
  label: blockLabel,
  name: "introVideo",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),  
  defaultItem: {
    videoId: "370256053",
    text: "Today, in the year 2038, we have mastered the large crises. It was a close call, yet, we just about made it. After the total financial melt-down in the year 2022, the world came to its senses. We live in radical democracy and radical bureaucracy, in a society, that knows neither hero nor villain. In a series of films, the German Pavillon shows how we arrived at this era of New Serenity.",
    text2: "The German Pavillon at the Architecture Biennale 2020",
  },
  fields: [
    { name: "videoId", label: "Vimeo Video ID", component: "text" },
    { name: "text", label: "Text", component: "textarea" },
    { name: "text2", label: "Small Text", component: "text" },
  ],
}
