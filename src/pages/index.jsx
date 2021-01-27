import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/profileimage"
import SEO from "../components/seo"
import Article from "../components/article"
import Case from "../components/case"
import ArticleList from "../components/articleList"
import SectionTitle from "../components/sectionTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Tas Guerci Maia" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image - changed to logo />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

    {/* HERO BEGINING*/}
    <div className="ph5-ns ma3 mt0-ns mt5 pt6 pa5-ns">
      <div >
        <p className="normal gray-e f-subheadline-l lh-title f2">
          Hey, call me Tas. I am a designer transforming the commerce industry
          at{" "}
          <a href="https://vtex.com/us-en/" target="_blank" class="underline-link normal gray-e f-headline-l lh-title f2" >VTEX</a>.
        </p>
      </div>
    </div>
    {/* HERO END*/}
    {/* CASES BEGINING*/}
    <div id="work" className='w-100 mt6 contentMW'>
      <Case
        CaseImage="caseStone"
        company="Stone"
        title="Teste do case"
        link="/about"
      />
      <Case
        CaseImage="caseVTEX"
        company="VTEX"
        title="Teste do case"
        link="/about"
      />
    </div>
    {/* CASES END*/}
    {/* ARTICLES BEGINING*/}
    <div id="articles" className='contentMW w-100 bg-ac2 pa5-ns pa3 pv4 mt4'>
      <div className="flex-ns justify-between">

        <div className="base-w w-40-ns w-100">
          <SectionTitle
            SectionName="Articles"
            SectionSubTitle="Over the years I spent sometime sharing what I've leaned and thoght about design. 
            Here I share the articles that I like most. For more check my medium"
          />
        </div>

        <div className="w-50-ns w-100 mt0-ns mt4 pr2">
          <ArticleList/>        
        </div>
      </div>
    </div>
    {/* ARTICLES END*/}
  </Layout>
)

export default IndexPage
