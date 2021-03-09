import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "O Principe Alegre"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./principesite.jpeg" alt="Gatsby Scene" />
        <h1>
          Sobre isso tudo
        </h1>
        <p>O Príncipe Alegre reúne poemas, recortes de zines e sons, resultantes de transições, visões e sentimentos.</p>
        <p>Expressão por sí</p>
        <Link to="/blog/">
          <Button marginTop="35px">Acompanhar materiais</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
