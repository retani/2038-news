import React from "react"
import styled from 'styled-components'

//import {p as P} from '../components/HtmlElements'
import Spacer from '../components/Spacer'
import { p as P } from '../components/HtmlElements'
import ButtonSmall from '../components/ButtonSmall'
import MarkedText from '../components/MarkedText'

import { colors, typoSizes, typoStyles, typoSnippet } from '../../config/styles'

const blockLabel = "NEWS"

export function News({ data }) {
  const {text, text2, link} = data
  return (
    <Container>
      <Spacer />
      <LargeText>
        +++ <MarkedText text={text} /> +++
      </LargeText>
      <SmallText>
        {text2}
      </SmallText>      
      <a href={link} title={link}>
        <ButtonSmall theme="blue-on-white">LINK</ButtonSmall>
      </a>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.blue};
  color: ${ colors.white };
`

const LargeText = styled(P)`
  ${ 
    typoSnippet({ 
      typoSize: typoSizes.moduleMedium, 
      typoStyle: typoStyles.RobotoMonoRegular
    }) 
  };
`

const SmallText = styled(P)`
  ${ 
    typoSnippet({ 
      typoSize: typoSizes.moduleSmall, 
      typoStyle: typoStyles.RobotoMonoRegular
    }) 
  };
  text-align: center;
`

export const NewsBlock = {
  name: "news",
  label: blockLabel,
  itemProps: (article) => ({
    label: `${blockLabel}: ${article.text}`,
  }),
  defaultItem: {
    text: `Oditesto denitisquam nus quamend ipsam, sus ma dolut est voluptam diciis dem ut quas que qui quibusdamet ut et denitisquam nus quamend.`,
    text2: 'Erika Mustermann on theatlantic.com',
    link: ''
  },
  fields: [
    { name: "text", label: "Text", component: "textarea", description: "Use {} to highlight" },
    { name: "text2", label: "Small Text", component: "text" },
    { name: "link", label: "Link", component: "text", description: "URL, e.g. https://theatlantic.com" },
  ],
}
