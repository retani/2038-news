import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import get from "lodash.get"

import Document from '../components/Document'
import {p as P} from '../components/HtmlElements'
import Spacer from '../components/Spacer'
import { BlockListItem, ButtonBlock } from '../components'

import { spaces, colors, blockSnippet, typoSizes, typoStyles, blockTypoSnippet } from '../../config/styles'

const blockLabel = "PUBLICATION"

export function Publication({ data }) {
  const {text, file} = data
  return (
    <Document>
      {
        data.image &&
        data.image.childImageSharp && (
          <Img fluid={data.image.childImageSharp.fluid} />
        )
      }
      <Spacer space={spaces.medium}/>
      <Text>
        {text}
      </Text>
      <Bottom>
    { file && file.substr(-3,3).toLowerCase==="pdf" && <ButtonBlock text=".PDF" href={file}/> }
      </Bottom>
    </Document>
  )
}

const Text = styled.p`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleMedium, 
      typoStyle: typoStyles.RobotoMonoRegular,
      spaceTop: spaces.medium,
      spaceBottom: spaces.medium,
    }) 
  };
  text-align: center;
  color: ${ colors.blue};
`

const Bottom = styled.p`
  ${ 
    blockSnippet({ 
      spaceBottom: spaces.small,
    }) 
  };
`

export const PublicationBlock = {
  label: blockLabel,
  name: "publication",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),  
  defaultItem: {
    image: "",
    text: `ARTS OF THE WORKING CLASS\nWith texts by Olaf Grawert, Dorothee Hahn, Nils Havelka, Helene Hegemann, Holger Heissmeyer, Angelika Hinterbrandner, Nikolaus Hirsch, Fabrizio Hochschild Drummond, Ludger Hovestadt and many more`,
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
    {
      name: "file",
      label: "PDF",
      component: "file",
      accept: 'application/pdf',
      clearable: true,
      parse: (file) => `/uploads/pdfs/${file}`,
      uploadDir: () => '/static/uploads/pdfs/', 
    },    
  ],
}
