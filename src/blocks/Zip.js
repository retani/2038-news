import React, {Fragment} from "react"

//import {p as P} from '../components/HtmlElements'
import DownloadLink from '../components/DownloadLink'
import { BlockListItem, Spacer } from '../components'

import { basename } from '../helpers/misc'
import { spaces } from "../../config/styles"

const blockLabel = "Zip Download"
const blockName = "zip"

export function Zip({ data }) {
  const {file} = data
  return <>
    <Spacer space={spaces.medium} />
    <DownloadLink title={file} text=".ZIP" href={file} />
    <Spacer space={spaces.medium} />
  </>
}

export const ZipBlock = {
  name: blockName,
  label: blockLabel,
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={basename(item.file)} />,
  }),
  defaultItem: {
    file: ''
  },
  fields: [
    {
      name: "file",
      label: "ZIP",
      component: "file",
      description: '.ZIP Upload',
      accept: 'application/zip',
      clearable: true,
      onClear: ()=>"",
      parse: (file) => `/uploads/zips/${file}`,
      uploadDir: () => `/static/uploads/zips/`, 
    },
  ],
}
