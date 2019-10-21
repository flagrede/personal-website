import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import patternBg from "../images/taieri.svg";

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
        <h2
          sx={{
            display: "flex",
            fontWeight: "bold",
            color: "text",
            fontWeight: "bold",
            alignItems: "center",
            my: 8,
            p: 10,
            fontSize: "3rem",
            color: "gray",
            width: ["100%", "100%", "50%"]
          }}
        >
          Hi, I'm Florent. A freelance front-end developper based in Paris.
        </h2>
        <div
          sx={{ width: ["100%", "100%", "50%"] }}
          style={{ backgroundImage: `url(${patternBg})` }}
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
