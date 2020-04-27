import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Link } from '../components/Router'
import Button from './Button'
import { p as P } from './HtmlElements'

import { metrics, dist, breakpoints, colors, typoStyles, typoSizes, fontSnippet, blockTypoSnippet } from '../../config/styles'

const sizes={
  small: {
    typoSize: typoSizes.buttonSmall,
  },
  large: {
    typoSize: typoSizes.button,
  }
}

export default ({children, href, to, title, download, text, textOffset, theme, disabled, size="small"}) =>  {
  const _title = title || href || to
  const _target = href && !download ? "_blank" : null
  console.log(_target)

  const button = <Button disabled={disabled} textOffset={textOffset} size={size} theme={theme}>
    {text}{children}
  </Button>

  const inner = to ? <Link to={to}>{button}</Link>
  : ( href ? <A href={href} target={_target} title={_title} download={download}>{button}</A> 
    :  <Fragment>{button}</Fragment> )

  return <Container size={sizes[size]}>
    {inner}
  </Container>
}

const Container = styled.div`
  ${ ({size}) => `
    height: ${size.typoSize.lineHeightPx.l + "px"};
    @media ${ breakpoints.small } {
      height: ${size.typoSize.lineHeightPx.s + "px"};
    }
  `}
  text-align: center;
  overflow: hidden;
  letter-spacing: 0.02em;
`

const A = styled.a`
  display: block;
`