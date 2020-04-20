import React, {Fragment} from "react"
import styled from 'styled-components'

//import {p as P} from '../components/HtmlElements'
import DownloadLink from '../components/DownloadLink'
import Spacer from '../components/Spacer'
import MarkedText from '../components/MarkedText'
import { BlockStyleDiv } from '../components/HtmlElements'

import { colors, typoSizes, typoStyles, typoSnippet } from '../../config/styles'

const blockLabel = "Zip"
const blockName = "zip"

export function Zip({ data }) {
  console.log(data)
  const {file} = data
  return (
    <Container>
      <DownloadLink title={file} text=".ZIP" href={file} />
    </Container>
  )
}

const Container = styled(BlockStyleDiv)`
`
export const ZipBlock = {
  name: blockName,
  label: blockLabel,
  itemProps: (item) => ({
    label: `${blockLabel}: ${item.file}`,
  }),
  defaultItem: {
    file: ''
  },
  fields: [
    {
      name: "file",
      label: "ZIP",
      component: "file",
      description: 'This is a zip upload field',
      /*accept: 'application/zip',*/
      clearable: true,
      onClear: ()=>"",
      parse: (file) => `/zips/${file}`,
      uploadDir: () => `/content/zips/`, 
    },
  ],
}
