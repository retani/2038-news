import React from "react"
//import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'
import ButtonSmall from '../components/ButtonSmall'

const blockLabel = "NEWS"

export function News({ data }) {
  console.log(data)
  const {newsItems} = data
  return (
    <>
      <h2>NEWS</h2>
      {newsItems.map(newsItem => renderNewsItem(newsItem))}
    </>
  )
}

function renderNewsItem(newsItem) {
  const {text, link} = newsItem
  return <div key={newsItem.link + newsItem.text + ""}>
    <P>
    +++ {text} +++
    </P>
    <a href={link || "/"} title={link}>
      <ButtonSmall textOffset="3px" theme="light">
        Link
      </ButtonSmall>
    </a>  
  </div>
}

export const NewsBlock = {
  label: blockLabel,
  name: "news",
  itemProps: (item) => ({
    label: `${blockLabel}`,
  }),
  defaultItem: {
    id: Math.random()
    .toString(36)
    .substr(2, 9),
  },
  fields: [
    {
      label: "News Items",
      name: "newsItems",
      component: "group-list",
      itemProps: item => ({
        key: item.text + item.link + "",
        label: item.text,
      }),
      defaultItem: () => ({
        text: 'New News Item',
        id: Math.random()
          .toString(36)
          .substr(2, 9),
      }),      
      fields: [
        {
          label: "Text",
          name: "text",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },    
  ],
}
