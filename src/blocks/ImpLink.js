import React from 'react'
import styled from 'styled-components'
import { Link } from '../components/Router'

import { p as P } from '../components/HtmlElements'
import { BlockListItem, Button } from '../components'

const blockLabel = "Imprint Link"

export const ImpLink = props =>  {
  const {text} = props.data
  return <Container>
    <Link to="/imprint" title="/imprint">
      <Button textOffset="3px" theme="light">
        { text }
      </Button>
    </Link>
  </Container>
}

export const ImpLinkBlock = {
  label: blockLabel,
  name: "ImpLink",
  key: "dunno",
  defaultItem: {
    text: "IMP.",
  },
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),    
  fields: [
    { name: "text", label: "Link Text", component: "text" },
  ],
}

const Container = styled(P)`
  text-align: center;
`


