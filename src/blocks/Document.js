import React from "react"
import styled, { css } from "styled-components"

import { Spacer, Document as Doc, BlockListItem } from '../components'

import { snippets, spaces, breakpoints, metrics, dist, blockTypoSnippet, typoStyles, typoSizes } from '../../config/styles'

const blockLabel = "DOCUMENT"

export function Document({ data, html }) {
  return (
    <Doc>
      <Spacer space={spaces.medium}/>
      <StyledContent
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Doc>
  )
}

const StyledContent = styled.div`
  p, ul {
    ${blockTypoSnippet({
      typoSize:typoSizes.moduleSmall ,
      typoStyle:typoStyles.RobotoMonoRegular,
      spaceSide:spaces.small,
      spaceBottom:spaces.medium,
    })}
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

export const DocumentBlock = {
  label: blockLabel,
  name: "document",
  key: "test",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.content} />,
  }),    
  defaultItem: {
    content: "",
  },
  fields: [
    { name: "content", label: "Content", component: "textarea" },
  ],
}
