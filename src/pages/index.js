import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from "../components/section"

import image1 from "../images/eyelash-1-small.jpg"
import image2 from "../images/eyelash-2-small.jpg"
import image3 from "../images/big-night-out-small.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section heading="Eyelash Extensions" image={image1}>
      <p>
        The reason so many celebrities have perfect lashes day-in, day-out. Now
        you can too! A short cosmetic application used to enhance the length,
        curl, fullness, and thickness of natural eyelashes.
      </p>
      <p>
        At £20 this application can take from 45minutes to 1 and a half hours,
        depending on your lashes. Everyone is unique and some of us are more
        difficult than others.
      </p>
    </Section>

    <Section heading="Lash Lift" image={image2}>
      <p>
        Gives natural lashes the boost they need to look good all day, every
        day. A lash lift sets the shape of your lashes using a chemical
        solution, giving a semi-permanent realistic upward curl.
      </p>
      <p>At £35, this treatment can take between 45 minutes and an hour.</p>
    </Section>

    <Section heading="Big Nights Out" image={image3}>
      <p>
        If you’ve been invited to a fancy wedding or just heading down the local
        and want to look your best, we can put a package of treatments together
        that would suit you.
      </p>
      <p>
        Get in touch and we can discuss what treatments would suit you best!
      </p>
    </Section>
  </Layout>
)

export default IndexPage
