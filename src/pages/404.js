import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div sx={{ mx: "auto" }}>
        <img
          alt="Ghost getting abducted by aliens"
          sx={{ display: "block", mx: "auto", width: "50%" }}
          src={abductionIllustration}
        />
        <h2
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "highlight",
            fontSize: "heading",
            fontWeight: "bold",
            my: 3,
            p: 2
          }}
        >
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
