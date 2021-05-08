import React from "react"
import styled from 'styled-components'

import BackgroundVideo from "../components/BackgroundVideo"
import {p as P, Block} from '../components/HtmlElements'
import { 
  BlockListItem, 
  ButtonBlock,
  Spacer,
  ButtonLarge,
  BlockWrapper } from '../components'

import { genericFields } from '../helpers/misc'
import { colors, spaces, typoSizes, typoStyles, blockTypoSnippet } from '../../config/styles'

const blockLabel = "INTRO HUBS"

export function IntroLink({ data }) {
  const {text,text2,videoId, file, hide, link, linkText} = data
  const buttonColor = colors.white
  return (
    <BlockWrapper label={blockLabel} hide={hide}>
      <Block 
        spaceBottom={spaces.mediumShrink}
        spaceSide={spaces.none}
      >
        <OverlayContainer>
          <BackgroundVideo vimeoId={videoId} />
          <ButtonContainer href={link} target="_blank">
            <ButtonLarge highlight={!!buttonColor} color={buttonColor} style={{ mixBlendMode: "screen", fontWeight: "500", textAlign: "center" }}
            >
              {linkText.toUpperCase()}
            </ButtonLarge>
          </ButtonContainer>
        </OverlayContainer>
      </Block>
      <Block
        typoSize={typoSizes.moduleMedium}
        typoStyle={typoStyles.RobotoMonoRegular}  
        spaceBottom={spaces.medium}
      >
        {text}
      </Block>
      <SmallText>
        <span>{text2}</span>
      </SmallText>
      { file && file.substr(-3,3).toLowerCase()==="pdf" &&
        <>
          <Spacer space={spaces.small} />
          <ButtonBlock text=".PDF" href={file} />
        </>
      }
      <Spacer space={spaces.large} />
    </BlockWrapper>
  )
}

const LargeText = styled(P)`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleSmall, 
      typoStyle: typoStyles.RobotoMonoRegular,
    }) 
  };
  color: ${ colors.blue };
  text-align: center;
`

const SmallText = styled(P)`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleSmall, 
      typoStyle: typoStyles.RobotoMonoRegular,
    }) 
  };
  color: ${ colors.blue };
  text-align: center;
  span { max-width: 800px; }
  display: flex;
  justify-content: center;  
`

const ButtonContainer = styled.a`
  text-decoration: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;
`

const OverlayContainer = styled.div`
  position: relative;
`

export const IntroLinkBlock = {
  label: blockLabel,
  name: "introLink",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} hide={item.hide} />,
  }),  
  defaultItem: {
    videoId: "115845843",
    text: "Today, in the year 2038, we have mastered the large crises. It was a close call, yet, we just about made it. After the total financial melt-down in the year 2022, the world came to its senses. We live in radical democracy and radical bureaucracy, in a society, that knows neither hero nor villain. In a series of films, the German Pavillon shows how we arrived at this era of New Serenity.",
    text2: "The German Pavillon at the Architecture Biennale 2020",
    link: "https://thenewserenity.com",
    linkText: "HUBS",
  },
  fields: [
    { name: "videoId", label: "Vimeo Video ID", component: "text" },
    { name: "link", label: "Link", component: "text", description: "URL, e.g. https://thenewserenity.com" },
    { name: "linkText", label: "Link Text", component: "text", description: "Link Text, e.g. VISIT NOW" },
    { name: "text", label: "Text", component: "textarea" },
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
    ...genericFields
  ],
}
