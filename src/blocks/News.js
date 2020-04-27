import React from "react"
import styled from 'styled-components'

//import {p as P} from '../components/HtmlElements'
import Spacer from '../components/Spacer'
import { p as P, Block } from '../components/HtmlElements'
import MarkedText from '../components/MarkedText'
import { 
  BlockListItem, 
  DownloadLink,
  Button,
  ButtonBlock } from '../components'

import { colors, spaces,  typoSizes, blockSnippet, blockTypoSnippet, typoStyles, typoSnippet } from '../../config/styles'

const blockLabel = "NEWS"

export function News({ data }) {
  const {text, text2, link, file, usePdf} = data
  const textTrimmed = text.replace(/^\s+|\s+$/g, '')
  return (
    <Container>
      <Spacer space={spaces.medium}/>
      <LargeText>
        <MarkedText text={`+++ ${textTrimmed} +++`} typoSize={typoSizes.moduleMedium}/>
      </LargeText>
      <SmallText>
        <span>{text2}</span>
      </SmallText>
      <Bottom>
        { !usePdf ? 
            <ButtonBlock href={link} title={link} theme="blue-on-white">LINK</ButtonBlock>
          :
          <ButtonBlock theme="blue-on-white" title={file} text=".PDF" href={file} />
        }
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.blue};
  color: ${ colors.white };
  overflow: hidden;
`

const LargeText = styled.p`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleMedium, 
      typoStyle: typoStyles.RobotoMonoRegular,
      spaceBottom: spaces.medium
    }) 
  };
`

const SmallText = styled.p`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleSmall, 
      typoStyle: typoStyles.RobotoMonoRegular,
      spaceBottom: spaces.small
    }) 
  };
  text-align: center;
  span { max-width: 800px; }
  display: flex;
  justify-content: center;
`

const Bottom = styled.p`
  ${ 
    blockSnippet({ 
      spaceBottom: spaces.small
    }) 
  };
  text-align: center;

`

export const NewsBlock = {
  name: "news",
  label: blockLabel,
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),
  defaultItem: {
    text: `Oditesto denitisquam nus quamend ipsam, sus ma dolut est voluptam diciis dem ut quas que qui quibusdamet ut et denitisquam nus quamend.`,
    text2: 'Erika Mustermann on theatlantic.com',
    link: ''
  },
  fields: [
    { name: "text", label: "Text", component: "textarea", description: "Use {} to highlight" },
    { name: "text2", label: "Small Text", component: "text" },
    {
      label: 'Link or PDF',
      name: 'usePdf',
      description: 'Choose Link (left) or PDF (right)',
      component: "condition",
      trigger: {
        component: "toggle"
      },
      fields: (usePdf) => {
        return !usePdf ? [
          { name: "link", label: "Link", component: "text", description: "URL, e.g. https://theatlantic.com" },
        ] : [
          {
            name: "file",
            label: "PDF",
            component: "file",
            description: '.PDF Upload',
            accept: 'application/pdf',
            clearable: true,
            parse: (file) => `/uploads/pdfs/${file}`,
            uploadDir: () => '/static/uploads/pdfs/', 
          },
        ]
      }
    },    
  ],
}
