import React from "react"
import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'
import { Header } from '../components/Header'

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
    label: `${blockLabel}: ${item.text}`,
  }),  
  defaultItem: {
    text: `2038`,
  },
  fields: [
    { name: "text", label: "Text", component: "text" },
  ],
}
