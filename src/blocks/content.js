import React from "react"
import styled, { css } from "styled-components"

import { snippets, breakpoints, metrics, dist } from '../../config/styles'

export function Content({ data, html }) {
  const centered = data.center ? data.center : false
console.log(data, html)
  return (
    <StyledContent
      center={centered}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></StyledContent>
  )
}

const StyledContent = styled.div`
  p, ul {
    ${snippets.blockStyle}
  }

  li {
    &::before {
      content: "- ";
    }
    margin-left: calc( 2 * ${ dist.letterWidth} );
    text-indent: calc( -2 * ${ dist.letterWidth} );
  }

  br {
  }

  a {
    ${snippets.typography.underline};
    word-break: break-all;
  }
`

export const ContentBlock = {
  label: "Content",
  name: "content",
  key: "test",
  defaultItem: {
    content: "",
    center: false,
  },
  fields: [
    { name: "content", label: "Content", component: "textarea" },
  ],
}
