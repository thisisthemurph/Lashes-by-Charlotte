import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <h2>About</h2>

      <ul className="about-list">
        <li className="about-list__item">
          <span>Lash Technician</span>
        </li>
        <li className="about-list__item">
          <span>Warwickshire based</span>
        </li>
        <li className="about-list__item">
          <span>Dental Nurse by day</span>
        </li>
        <li className="about-list__item">
          <span>Evening and weekend appointments</span>
        </li>
      </ul>

      <p>
        As a part-time lash technician, I'm able to adapt my timetable to suit your schedule. I
        primarily focus on lash extensions but can also do lash lift, hair and makeup. If there is
        anything else you’re interested in,{" "}
        <a className="link" href="../contact/">
          contact me
        </a>{" "}
        and we can get you booked in!
      </p>
    </div>
  </Layout>
)

export default ContactPage
