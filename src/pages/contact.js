import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact-form"
import GoogleMap from "../components/google-map"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div class="container container__flex">
      <div class="container__col">
        <h2>Get in touch</h2>
        <ContactForm />
      </div>

      <div class="container__col">
        <h2>Where to find me...</h2>

        <GoogleMap />

        <div class="container container__flex">
          <p class="container__col">
            <strong>Address:</strong>
            <br />
            11 Meadow Sweet Road, <br />
            Stratford-upon-Avon, <br />
            CV37 7UB
            <br />
          </p>
          <p class="container__col">
            <strong>Contact:</strong>
            <br />
            charlotte@lashesbycharlotte.com
            <br />
            07950 286 215
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
