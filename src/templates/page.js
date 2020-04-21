import React from "react"
import { graphql } from "gatsby"

import {Helmet} from "react-helmet"

import { Title, TitleBlock } from "../blocks/title"
import { Image, ImageBlock } from "../blocks/image"
import { Content, ContentBlock } from "../blocks/content"
import { Countdown, CountdownBlock } from "../blocks/Countdown"
import { Landscape, LandscapeBlock } from "../blocks/Landscape"
import { Publication, PublicationBlock } from "../blocks/Publication"
import { News, NewsBlock } from "../blocks/News"
import { Zip, ZipBlock  } from '../blocks/Zip'
import { With, WithBlock } from "../blocks/With"
import { AppPreview, AppPreviewBlock } from '../blocks/AppPreview'
import { Section, SectionBlock } from "../blocks/Section"
import { IntroVideo, IntroVideoBlock } from "../blocks/IntroVideo"
import { Article, ArticleBlock } from "../blocks/Article"
import { TalkingHeads, TalkingHeadsBlock } from '../blocks/TalkingHeads'
import { ImpLink, ImpLinkBlock } from '../blocks/ImpLink'

import { PageLayout } from "../components/pageLayout"
import { globalStyles } from '../../config/styles'

import { useLocalJsonForm } from "gatsby-tinacms-json"
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`${globalStyles}`

export default function Page(props) {
  const data = props.data
  const [page] = useLocalJsonForm(data.page, PageForm)
  const blocks = (page && page.blocks) ? page.blocks : []

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Helmet>
        <style>
          {`div[class^=FormHeader] + div > div {
            overflow: auto;
          }`}
        </style>
      </Helmet>
      <PageLayout page={page}>
        {mapBlocks(data,page,blocks)}
      </PageLayout>
    </>
  )
}

const mapBlocks = function(data,page,blocks) {
  if (!blocks || !Array.isArray(blocks)) return null
  return blocks.map(({ _template, ...data }, i, arr) => {
    switch (_template) {
      case "TitleBlock":
        return <Title page={page} data={data} />
      case "CountdownBlock":
        return <Countdown key={"CountdownBlock" + i} data={data} />
      case "TalkingHeadsBlock":
        return <TalkingHeads key={"TalkingHeadsBlock" + i} data={data} />
      case "LandscapeBlock":
        return <Landscape key={"LandscapeBlock" + i} data={data} />
      case "PublicationBlock":
        return <Publication key={"PublicationBlock" + i} data={data} />
      case "ArticleBlock":
        const shadeBlocks = ["SectionBlock", "WithBlock"]
        const shade = (arr[i+1] && shadeBlocks.indexOf(arr[i+1]._template) > -1 )
        return <Article key={"ArticleBlock" + i} shade={shade} data={data} />                    
      case "IntroVideoBlock":
        return <IntroVideo key={"IntroVideoBlock" + i} data={data} />
      case "WithBlock":
        return <With key={"WithBlock" + i} data={data} />
      case "SectionBlock":
        return <Section key={"SectionBlock" + i} data={data} />                
      case "AppPreviewBlock":
        return <AppPreview key={"AppPreviewBlock" + i} data={data} />                    
      case "ZipBlock":
        return <Zip key={"ZipBlock" + i} data={data} />  
      case "NewsBlock":
        return <News key={"NewsBlock" + i} data={data} />                    
      case "ImpLinkBlock":
        return <ImpLink key={"ImpLinkBlock" + i} data={data} />                                
      case "ContentBlock":
        if (data.content && page.childrenPagesJsonBlockMarkdown[i])
          return (
            <Content
              key={"ContentBlock" + i}
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
  })
}

const PageForm = {
  label: "2038",
  fields: [
    {
      label: "Modules",
      name: "rawJson.blocks",
      component: "blocks",
      templates: {
        AppPreviewBlock,
        ArticleBlock,
        CountdownBlock,
        IntroVideoBlock,
        LandscapeBlock,
        NewsBlock,
        PublicationBlock,
        SectionBlock,
        /*TalkingHeadsBlock,*/
        WithBlock,
        ContentBlock,
        ImpLinkBlock,
        ZipBlock,
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
