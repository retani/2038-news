import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import get from "lodash.get"

import BlockWrapper from '../components/BlockWrapper'
import Document from '../components/Document'
import {p as P} from '../components/HtmlElements'
import Spacer from '../components/Spacer'
import { BlockListItem, ButtonBlock } from '../components'

import { hasFile } from '../helpers/validators'
import { spaces, colors, blockSnippet, typoSizes, typoStyles, blockTypoSnippet } from '../../config/styles'

const blockLabel = "PUBLICATION"

export function Publication({ data }) {
  const {text, file, usePdf, link, color=colors.blue } = data
  return (
    <BlockWrapper label={blockLabel}>
      <Document>
        {
          data.image &&
          data.image.childImageSharp && (
            <Img fluid={data.image.childImageSharp.fluid} />
          )
        }
        {/*<Spacer space={spaces.medium}/>*/}
        <SmallText color={color}>
          {text}
        </SmallText>
        <Bottom>
          { !usePdf ? 
            link && <ButtonBlock href={link} theme={/*color===colors.black ? "black-on-white" : null*/null} title={link}>LINK</ButtonBlock>
            :
            hasFile(file, "pdf") && <ButtonBlock theme={/*color===colors.black ? "black-on-white" : null*/null} title={file} text=".PDF" href={file} />
          }      
        </Bottom>
      </Document>
    </BlockWrapper>
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

const SmallText = styled.p`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleSmall, 
      typoStyle: typoStyles.RobotoMonoRegular,
      spaceTop: spaces.small,
      spaceBottom: spaces.small
    }) 
  };
  text-align: center;
  span { max-width: 800px; }
  display: flex;
  justify-content: center;
  color: ${ ({color}) => color || colors.blue};
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
    color: colors.black,
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
    {
      name: 'color',
      component: 'color',
      label: 'Text Color',
      colorFormat: 'hex',
      colors: [colors.blue, colors.black],
      widget: 'block',
    },    
  ],
}
