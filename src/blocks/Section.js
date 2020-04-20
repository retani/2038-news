import React from "react"
import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'
import Header from '../components/SectionHeader'
import { BlockListItem } from '../components'

const blockLabel = "SECTION"

export function Section({ data }) {
  const {text} = data
  return (
    <Header>
      {text}
    </Header>
  )
}

const Container = styled.div``


export const SectionBlock = {
  label: blockLabel,
  name: "section",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),  
  defaultItem: {
    text: `2038`,
  },
  fields: [
    { name: "text", label: "Text", component: "text" },
  ],
}
