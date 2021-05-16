import React from "react"
import styled from 'styled-components'

import BlockWrapper from '../components/BlockWrapper'
import MainVideo from '../components/MainVideo'
import Document from '../components/Document'
import {
  BlockListItem,
  ButtonBlock
} from '../components'
import { hasFile, vimeoIdValid } from '../helpers/validators'
import { colors, spaces, typoSizes, blockSnippet, blockTypoSnippet, typoStyles, breakpoints, typoSnippet } from '../../config/styles'

const blockLabel = "TALKING HEADS"

export function TalkingHeads({ data }) {
  const { videoId, videoId2, videoId3, videoId4, text, text2, link, file, usePdf, color=colors.bg } = data

  const videosAmount = !!videoId + !!videoId2 + !!videoId3 + !!videoId4

  console.log(videosAmount)

  const bottom = <>
    <LargeText>
      {text}
    </LargeText>
    <SmallText>
      <span>{text2}</span>
    </SmallText>
    <Bottom>
      {!usePdf ?
        link && <ButtonBlock href={link} title={link} theme="blue-on-white">LINK</ButtonBlock>
        :
        hasFile(file, "pdf") && <ButtonBlock theme="blue-on-white" title={file} text=".PDF" href={file} />
      }
    </Bottom>
  </>

  const content = videosAmount === 1 ?
    <Document color={color}>
      <MainVideo vimeoId={videoId} fullscreenButton={false} buttonColor={color} />
      { bottom }
    </Document>
  :
    <>
      <VideoGrid videosAmount={videosAmount}>
        <MainVideo vimeoId={videoId} fullscreenButton={false} buttonColor={color} />
        {videoId2 && <MainVideo vimeoId={videoId2} fullscreenButton={false} buttonColor={color} />}
        {videoId3 && <MainVideo vimeoId={videoId3} fullscreenButton={false} buttonColor={color} />}
        {videoId4 && <MainVideo vimeoId={videoId4} fullscreenButton={false} buttonColor={color} />}
      </VideoGrid>
      { bottom }
    </>


  return (
    <BlockWrapper label={blockLabel}>
      { content }
    </BlockWrapper>
  )
}

export const TalkingHeadsBlock = {
  label: blockLabel,
  name: "talkingHeads",
  id: "th",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),  
  defaultItem: {
    videoId: "370256053",
    text: "„For those who never experienced a change of the political system, it seemed unimaginable. But it happened and it could happen again.“",
    text2: "Conversation with Charlotte Malterre",
    color: colors.white,
  },
  fields: [
    { name: "videoId", label: "Vimeo Video ID 1", component: "text" },
    { name: "videoId2", label: "Vimeo Video ID 2 (optional)", component: "text" },
    { name: "videoId3", label: "Vimeo Video ID 3 (optional)", component: "text" },
    { name: "videoId4", label: "Vimeo Video ID 4 (optional)", component: "text" },
    { name: "text", label: "Text", component: "text" },
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
    {
      name: 'color',
      component: 'color',
      label: 'Background Color (only effective when there is only 1 video)',
      colorFormat: 'hex',
      colors: [colors.turquoise, colors.white],
      widget: 'block',
    },
  ],
}

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
  color: ${colors.blue};
`

const Bottom = styled.p`
  ${
  blockSnippet({
    spaceBottom: spaces.small
  })
  };
  text-align: center;
`

const VideoGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > * {
    width: 50%;
    &:nth-child(1), &:nth-child(2) {
      [class^=MainVideo__Container] {
        ${ ({ videosAmount }) => videosAmount > 2 && "margin-bottom: 0" };
      }
    }

    @media ${ breakpoints.small } {
      width: 100%;
      &:not(:last-child) {
        [class^=MainVideo__Container] {
          margin-bottom: 0;
        }
      }
    }
  }
`