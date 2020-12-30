import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profileimage"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="flex w-100 justify-center">
      <div className="w-40 f3 lh-copy pr5">
        <p>
          I started my career as a designer after technical school.
          Subsequently, I worked as a design assistant at an advertising agency,
          and then I began my undergrad. Since this time, I have had multiple
          experiences with graphic and digital design.
        </p>
        <p>
          I also spent some time in the US, studying Service Design. When I get
          back to Brazil I worked for small startups and two Brazilian unicorns,
          Stone payments, listed in Nasdaq, and VTEX, the biggest e-commerce
          platform in LATAM.
        </p>
        <p>
          I also spent some time in the US, studying Service Design. When I get
          back to Brazil I worked for small startups and two Brazilian unicorns,
          Stone payments, listed in Nasdaq, and VTEX, the biggest e-commerce
          platform in LATAM.
        </p>
        <h3 className="mb1 normal mt5">
        Work experience
        </h3>
        <a>
        View my resumé or check my Linkedin
        </a>
        <ul className="list pl1">
        <li>
          <p> 2012 - 2013</p>
          <p>Latina - Adverteising agency</p>
        </li>
        <li>
          <p>2012 - 2013</p>
          <p>Latina - Adverteising agency</p>
        </li>
      </ul>
      </div>
      <div className="profileImage"></div>
    </div>
  </Layout>
)
export default About