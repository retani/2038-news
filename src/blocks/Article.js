import React, {Fragment} from "react"
import styled from 'styled-components'

//import {p as P} from '../components/HtmlElements'
import DownloadLink from '../components/DownloadLink'
import Spacer from '../components/Spacer'
import MarkedText from '../components/MarkedText'
import { p as P } from '../components/HtmlElements'
import { BlockListItem } from '../components'

import { colors, typoSizes, typoStyles, typoSnippet } from '../../config/styles'

const blockLabel = "ARTICLE"

export function Article({ data, shade }) {
  const {text, text2, file} = data
  return (
    <Container shade={shade}>
      <Spacer />
      <LargeText>
        <MarkedText text={text} />
      </LargeText>
      <SmallText>
        {text2}
      </SmallText>      
      <DownloadLink title={file} text=".PDF" href={file} />
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.white};
  ${({shade})=> shade && `
    background-size: 100% 100px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-image: linear-gradient(to bottom, ${colors.white} 0%, ${colors.bg} 100%);
  `}
`

const LargeText = styled(P)`
  ${ 
    typoSnippet({ 
      typoSize: typoSizes.moduleBig, 
      typoStyle: typoStyles.RobotoMonoLight
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
  color: ${ colors.blue };
`

export const ArticleBlock = {
  name: "article",
  label: blockLabel,
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),
  defaultItem: {
    text: `„It was due to the new system, that humanity redifined its relation to nature. Today, {nature is an active political agent: land, water, air and light cannot be owned anymore.}“`,
    text2: 'Conversation with Eyal Weizman',
    file: ''
  },
  fields: [
    { name: "text", label: "Text", component: "textarea", description: "Use {} to highlight" },
    { name: "text2", label: "Small Text", component: "text" },
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
  ],
}
