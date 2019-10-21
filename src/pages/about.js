import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import cvIllustration from "../images/undraw_online_cv.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`florent lagrede`, `experiences`]} title="About" />

      <section
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          alignItems: "center",
          justifyContent: [null, "center"]
        }}
      >
        <div sx={{ width: [null, "33.333333%"], mr: [null, 3] }}>
          <blockquote
            sx={{
              color: "text",
              borderColor: "primary",
              borderLeftWidth: "4px",
              lineHeight: "body",
              pl: 2,
              textAlign: "justify"
            }}
          >
            I'm a JS front-end developer with 7 years of experience. I like to
            think and work on front-end problematics, which are specific to web
            interfaces (front performance, ui, ux...). I also have a solid
            experience on ReactJS technology and its ecosystem. I worked for
            large french companies (Oui.sncf, Engie) and websites with high
            traffic (jeuxvideo.com). Code quality is a strong value for me, I
            always keep in mind the maintainability of the code I write.
          </blockquote>
        </div>

        <figure sx={{ width: [`${(2 / 3) * 100}%`, `${(1 / 3) * 100}%`] }}>
          <img
            alt="A man watching a big curriculum vitae"
            src={cvIllustration}
          />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
