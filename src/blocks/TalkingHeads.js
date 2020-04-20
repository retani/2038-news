import React from "react"
import MainVideo from '../components/MainVideo'
import Document from '../components/Document'
import { BlockListItem } from '../components'

const blockLabel = "TALKING HEADS"

export function TalkingHeads({ data }) {
  return (
    <Document>
      <MainVideo vimeoId={data.videoId} />
      {data.text}
      {data.text2}
    </Document>
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
  },
  fields: [
    { name: "videoId", label: "Vimeo Video ID", component: "text" },
    { name: "text", label: "Text", component: "text" },
    { name: "text2", label: "Small Text", component: "text" },
  ],
}
