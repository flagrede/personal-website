import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[`freelance`, `front-end`, `react`]} title="Contact" />
      <section sx={{ display: "flex", mx: "auto" }}>
        <div sx={{ textAlign: "center" }}>
          <p
            sx={{
              color: "text",
              lineHeight: "body",
              mb: 3,
              fontWeight: "bold",
              fontSize: 4
            }}
          >
            Work with me !
          </p>

          <a
            sx={{
              borderBottom: "4px solid",
              borderColor: "#2d3748",
              "&:hover": { backgroundColor: "#718096" },
              backgroundColor: "#4a5568",
              fontWeight: "bold",
              px: 2,
              py: 1,
              borderRadius: "0.25rem",
              fontSize: 2,
              color: "background"
            }}
            href="mailto:florent.lagrede@gmail.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Send me a message
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
