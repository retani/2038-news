import React from "react"
import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'
import Header from '../components/SectionHeader'
import { BlockListItem, BlockWrapper } from '../components'

import { genericFields } from '../helpers/misc'
import { colors } from '../../config/styles'

const blockLabel = "SECTION"

export function Section({ data }) {
  const {text, color, hide} = data
  return (
    <BlockWrapper label={blockLabel} hide={hide}>
      <Header backgroundColor={color}>
        {text}
      </Header>
    </BlockWrapper>
  )
}

const Container = styled.div``


export const SectionBlock = {
  label: blockLabel,
  name: "section",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text}  hide={item.hide}/>,
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
    ...genericFields 
  ],
}
