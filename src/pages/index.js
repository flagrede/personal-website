import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import patternBg from "../images/taieri.svg";
import latestArticles from "../../content/latest-articles";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`florent lagrede`, `personal website`]} title="Home" />

      <section
        style={{ backgroundImage: { patternBg } }}
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          textAlign: "center",
          width: "100%"
        }}
      >
        <section
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: ["100%", "100%", "50%"],
            py: 4
          }}
        >
          <h2
            sx={{
              display: "flex",
              fontWeight: "bold",
              color: "text",
              fontWeight: "bold",
              alignItems: "center",
              my: 2,
              p: 10,
              fontSize: "3rem",
              color: "text",
              width: "100%"
            }}
          >
            Hi, I'm Florent. A freelance front-end developper based in Paris.
          </h2>
          <ul sx={{ mt: 4, width: ["90%", "90%", "70%"] }}>
            <h2
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                color: "text",
                fontWeight: "bold",
                alignItems: "center",
                my: 2,
                p: 10,
                fontSize: 4,
                color: "#4a5568",
                width: "100%"
              }}
            >
              Latest articles:
            </h2>
            {latestArticles.map(article => (
              <li>
                <Styled.h2
                  sx={{
                    mb: 1,
                    fontSize: 2
                  }}
                >
                  <Styled.a
                    sx={{
                      textDecoration: `none`
                    }}
                    href={article.link}
                  >
                    {article.title}
                  </Styled.a>
                </Styled.h2>
                <small>{article.date}</small>
                <Styled.p sx={{ fontSize: 1 }}>{article.description}</Styled.p>
              </li>
            ))}
          </ul>
        </section>
        <div
          sx={{ width: ["100%", "100%", "50%"] }}
          style={{ backgroundImage: `url(${patternBg})` }}
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
