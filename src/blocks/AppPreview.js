import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import get from "lodash.get"

import Document from '../components/Document'
import {p as P} from '../components/HtmlElements'
//import DownloadLink from '../components/DownloadLink'
import ButtonSmall from '../components/ButtonSmall'
import Spacer from '../components/Spacer'

import { typoSizes, typoStyles, typoSnippet } from '../../config/styles'

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
      <Spacer />
      <Text>
        {text}
      </Text>
      <ButtonSmall>SOON</ButtonSmall>
    </Document>
  )
}

const Text = styled.p`
  text-align: center;
  ${ typoSnippet({ typoSize: typoSizes.moduleBig, typoStyle: typoStyles.RobotoMonoLight}) };
`

export const AppPreviewBlock = {
  label: blockLabel,
  name: "apppreview",
  itemProps: (item) => ({
    label: `${blockLabel}: ${item.text}`,
  }),  
  defaultItem: {
    image: "",
    text: `> New perspectives <`,
  },
  fields: [
    { name: "text", label: "Text", component: "text" },
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
