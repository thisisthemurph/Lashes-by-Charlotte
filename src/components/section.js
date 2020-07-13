import React from "react"

import LinkButton from "./link-button"

const Section = ({ heading, image, children }) => (
  <section className="section">
    <div className="container">
      <header className="section__heading">
        <h2>{heading}</h2>
      </header>
      <img className="section__img" src={image} alt="eyelash extensions" />
      <main className="section__body">{children}</main>
      <footer className="section__foot">
        <LinkButton to="/contact">Get in touch</LinkButton>
      </footer>
    </div>
  </section>
)

export default Section
