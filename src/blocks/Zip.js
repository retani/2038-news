import React, {Fragment} from "react"

//import {p as P} from '../components/HtmlElements'
import DownloadLink from '../components/DownloadLink'
import { BlockListItem } from '../components'

import { basename } from '../helpers/misc'

const blockLabel = "Zip Download"
const blockName = "zip"

export function Zip({ data }) {
  console.log(data)
  const {file} = data
  return <DownloadLink title={file} text=".ZIP" href={file} />
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
      description: 'This is a zip upload field',
      /*accept: 'application/zip',*/
      clearable: true,
      onClear: ()=>"",
      parse: (file) => `/zips/${file}`,
      uploadDir: () => `/content/zips/`, 
    },
  ],
}
