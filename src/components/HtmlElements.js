import styled from 'styled-components'
import { Link } from './Router'

import { dist, snippets, breakpoints } from '../../config/styles'

const blockStyle = snippets.blockStyle

const BlockStyleDiv = styled.div`
  ${blockStyle}
`

const p = styled.p`
  ${blockStyle}
  ${ props => props.color && "color:" + props.color };
  ${ props => props.center && "text-align:center" };
`

const table = styled.table`${blockStyle}`

const dl = styled.dl`
  ${blockStyle}
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  `

const dt = styled.dt`
  width: 20.5ex;
  float:left;
  box-sizing:content-box;
  clear: left;
  position: relative;
  &::after {
    content: ":";
    position: absolute;
    right:0;
  }
`

const dd = styled.dd`
  // white-space: nowrap;
  float: left;
  padding-left: ${dist.letterWidth};
`

const em = styled.em`
  ${snippets.typography.underline};
`

const ul = styled.ul`
  ${blockStyle};
`

const li = styled.li`
  &::before {
    content: "- ";
  }
  margin-left: calc( 2 * ${ dist.letterWidth} );
  text-indent: calc( -2 * ${ dist.letterWidth} );
`

const br = styled.br`
${ ({onlySmall}) => onlySmall && "display: none;"}
  @media ${ breakpoints.small } {
    ${ ({onlySmall}) => onlySmall && "display: inline;"}
  }
`

const a = styled.a`
  ${snippets.typography.underline};
  word-break: break-all;
`

const StyledLink = styled(Link)`
  ${snippets.typography.underline};
`

const LargeSpacer = styled.div`
  height: 180px;
`

const OnlyLarge = styled.span`
  color:red;
  display: inline;
  @media ${ breakpoints.small } {
    display: none;
  }
`

export {
  p,
  a,
  table,
  dl,
  dd,
  dt,
  em,
  ul,
  li,
  br,
  StyledLink,
  LargeSpacer,
  BlockStyleDiv,
  OnlyLarge
}