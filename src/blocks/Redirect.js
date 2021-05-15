import React from "react"
import { Helmet } from "react-helmet"
import styled from 'styled-components'
import { BlockListItem, BlockWrapper } from '../components'

import { genericFields } from '../helpers/misc'

const blockLabel = "Redirect"

export function Redirect({ data }) {
  const { text, hide } = data
  const url = text
  const edit = /*( show || cms.sidebar.isOpen ) && */ process.env.NODE_ENV === "development"

  const info = <BlockWrapper label={blockLabel} hide={hide}>
    <A href={url}>
      This page will redirect to {url}
    </A>
  </BlockWrapper>

  const action = <>
    <a href={url}>
      Please click here if you are not redirected to {url}
    </a>
    <Helmet>
      {url && <meta http-equiv="refresh" content={`0; url = ${url}`} />}
    </Helmet>
  </>

  return edit ? info : hide ? null : action
};

const A = styled.a`
  word-wrap: break-word;
`

export const RedirectBlock = {
  label: blockLabel,
  name: "Redirect",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),
  defaultItem: {
    text: "https://2038.xyz",
  },
  fields: [
    { name: "text", label: "URL", component: "text" },
    ...genericFields
  ],
}
