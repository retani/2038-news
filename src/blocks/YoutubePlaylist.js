import React from "react"
import styled from 'styled-components'

import BlockWrapper from '../components/BlockWrapper'
import MainVideoYoutubePlaylist from '../components/MainVideoYoutubePlaylist'
import Document from '../components/Document'
import {
  BlockListItem,
  ButtonBlock
} from '../components'
import { hasFile, vimeoIdValid } from '../helpers/validators'
import { colors, spaces, typoSizes, blockSnippet, blockTypoSnippet, typoStyles, breakpoints, typoSnippet } from '../../config/styles'

const blockLabel = "YOUTUBE PLAYLIST"

export function YoutubePlaylist({ data }) {
  const { youtubePlaylistId, text, text2, link, file, usePdf, color = colors.bg } = data

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

  return (
    <BlockWrapper label={blockLabel}>
      <Document color={color}>
        <MainVideoYoutubePlaylist youtubePlaylistId={youtubePlaylistId} />
        {bottom}
      </Document>
    </BlockWrapper>
  )
}

export const YoutubePlaylistBlock = {
  label: blockLabel,
  name: "youtubePlaylist",
  id: "yp",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),  
  defaultItem: {
    youtubePlaylistId: "PLF2PMJdW5CEidfi7vjtH9lv-g4tMd5Rpv",
    text: "„For those who never experienced a change of the political system, it seemed unimaginable. But it happened and it could happen again.“",
    text2: "",
    color: colors.white,
  },
  fields: [
    { name: "youtubePlaylistId", label: "Youtube Playlist ID", component: "text" },
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
      label: 'Background Color',
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
