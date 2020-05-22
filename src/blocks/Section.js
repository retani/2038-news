import React from "react"
import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'
import Header from '../components/SectionHeader'
import { BlockListItem } from '../components'

import { colors } from '../../config/styles'

const blockLabel = "SECTION"

export function Section({ data }) {
  const {text, color} = data
  return (
    <Header backgroundColor={color}>
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
    color: colors.blue
  },
  fields: [
    { name: "text", label: "Text", component: "text" },
    {
      name: 'color',
      component: 'color',
      label: 'Background Color',
      colorFormat: 'hex',
      colors: [colors.blue, colors.green],
      widget: 'block',
    },    
  ],
}
