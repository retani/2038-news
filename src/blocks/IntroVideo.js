import React from "react"
import styled from 'styled-components'

import MainVideo from '../components/MainVideo'
import {p as P} from '../components/HtmlElements'

import { colors, typoSizes, typoStyles, typoSnippet } from '../../config/styles'

const blockLabel = "INTRO VIDEO"

export function IntroVideo({ data }) {
  const {text,text2,videoId} = data
  return (
    <Container>
      <MainVideo vimeoId={videoId} />
      <P>
        {text}
      </P>
      <SmallText>
        {text2}
      </SmallText>
    </Container>
  )
}

const Container = styled.div``

const SmallText = styled(P)`
  ${ 
    typoSnippet({ 
      typoSize: typoSizes.moduleSmall, 
      typoStyle: typoStyles.RobotoMonoRegular
    }) 
  };
  color: ${ colors.blue };
  text-align: center;
`

export const IntroVideoBlock = {
  label: blockLabel,
  name: "introVideo",
  itemProps: (item) => ({
    label: `${blockLabel}: ${item.text}`,
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
