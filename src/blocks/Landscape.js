import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import get from "lodash.get"

import BlockWrapper from '../components/BlockWrapper'
import BackgroundVideo from "../components/BackgroundVideo"
import { BlockListItem } from '../components'

import {   
  typoSizes,
  typoStyles,
  typoSnippet,  } from '../../config/styles'

import {vimeoIdValid} from '../helpers/validators'

const blockLabel = "LANDSCAPE"

export function Landscape({ data }) {
  const {text, videoId } = data
  return (
    <BlockWrapper label={blockLabel}>
      <Container>
        { !data.image ? 
          <BackgroundVideo vimeoId={videoId} />
          :
          <ImgContainer>
            {
              data.image &&
              data.image.childImageSharp && (
                <Img fluid={data.image.childImageSharp.fluid} />
              )
            }
          </ImgContainer>
        }
        <TextContainer>
          <Text>{text}</Text>
        </TextContainer>
      </Container>
    </BlockWrapper>
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

const ImgContainer = styled.div`
  box-sizing: content-box;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
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
    { name: "text", label: "Text", component: "text" },    
  ],
}
