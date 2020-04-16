import React from "react"
import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'

const blockLabel = "SECTION"

export function Section({ data }) {
  const {text} = data
  return (
    <Container>
      <Text>
        {text}
      </Text>
    </Container>
  )
}

const Container = styled.div``

const Text = styled(P)`
  text-align: center;
`

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
