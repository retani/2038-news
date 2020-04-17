import React from "react"
import { graphql } from "gatsby"
import { Content, ContentBlock } from "../blocks/content"

import { BackLink, Spacer }  from '../components'
import { PageLayout } from "../components/pageLayout"

import { globalStyles } from '../../config/styles'

import { useLocalJsonForm } from "gatsby-tinacms-json"
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`${globalStyles}`

export default function Page({ data }) {
  const [page] = useLocalJsonForm(data.page, PageForm)
  const blocks = (page && page.blocks) ? page.blocks : []

  return (
    <>
      <Reset />
      <GlobalStyle />
      <PageLayout page={page}>
        <Spacer />
        <BackLink />
        {blocks &&
          blocks.map(({ _template, ...data }, i) => {
            switch (_template) {
              case "ContentBlock":
                if (data.content && page.childrenPagesJsonBlockMarkdown[i])
                  return (
                    <Content
                      data={data}
                      html={
                        page.childrenPagesJsonBlockMarkdown[i]
                          .childMarkdownRemark.html
                      }
                    />
                  )
                break
              default:
                return true
            }
          })}
      </PageLayout>
    </>
  )
}

const PageForm = {
  label: "Imprint",
  fields: [
    {
      label: "Modules",
      name: "rawJson.blocks",
      component: "blocks",
      templates: {
        ContentBlock,
      },
    },
  ],
}

export const pageQuery = graphql`
  query($path: String!) {
    page: pagesJson(path: { eq: $path }) {
      title
      displayTitle
      hero {
        headline
        textline
        large
        overlay
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ctas {
          label
          link
          primary
          arrow
        }
      }
      blocks {
        _template
        content
        name
        title
        underline
        dateUTC
        videoId
        file
        text
        text2
        link
        center
        recipient
        fields {
          label
          inputType
          autocomplete
        }
        newsItems {
          text
          link
        }
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      childrenPagesJsonBlockMarkdown {
        childMarkdownRemark {
          html
        }
      }

      rawJson
      fileRelativePath
    }
  }
`