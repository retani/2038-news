import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import get from "lodash.get"

import Document from '../components/Document'
import {p as P, Block} from '../components/HtmlElements'
import { 
  BlockListItem, 
  ButtonBlock,
  Spacer } from '../components'

import { typoSizes, spaces, typoStyles, blockTypoSnippet } from '../../config/styles'

const blockLabel = "APP PREVIEW"

export function AppPreview({ data }) {
  const {text} = data
  return (
    <Document>
      {
        data.image &&
        data.image.childImageSharp && (
          <Img fluid={data.image.childImageSharp.fluid} />
        )
      }
      <Text>
        {text}
      </Text>
      <ButtonBlock disabled>
        SOON
      </ButtonBlock>
      <Spacer space={spaces.small} />
    </Document>
  )
}

const Text = styled.p`
  text-align: center;
  ${ blockTypoSnippet({ 
    typoSize: typoSizes.moduleBig, 
    typoStyle: typoStyles.RobotoMonoLight,
    spaceTop: spaces.medium,
    spaceBottom: spaces.medium,
    }) };
`

export const AppPreviewBlock = {
  label: blockLabel,
  name: "apppreview",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),  
  defaultItem: {
    image: "",
    text: `> New perspectives <`,
  },
  fields: [
    { name: "text", label: "Text", component: "textarea" },
    {
      label: "Image",
      name: "image",
      component: "image",
      parse: filename => `../images/${filename}`,
      uploadDir: () => `/content/images/`,
      previewSrc: (formValues, fieldProps) => {
        const pathName = fieldProps.input.name.replace("rawJson", "jsonNode")
        const imageNode = get(formValues, pathName)
        if (!imageNode || !imageNode.childImageSharp) return ""
        return imageNode.childImageSharp.fluid.src
      },
    },
  ],
}
