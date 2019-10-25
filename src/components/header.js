import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "56rem",
          mx: "auto",
          p: [2, 3]
        }}
      >
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "primary",
            "&:hover": { color: "text" }
          }}
          to="/"
        >
          <span
            sx={{ fontWeight: "bold", fontSize: 4, letterSpacing: "-0.025em" }}
          >
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          sx={{
            display: ["flex", "none"],
            borderWidth: "1px",
            borderColor: "background",
            alignItems: "center",
            px: 2,
            py: 1,
            borderRadius: "0.25rem",
            color: "text"
          }}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            sx={{ height: "0.75rem", width: "0.75rem", fill: "currentColor" }}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          sx={{
            display: [isExpanded ? "flex" : "none", "flex"],
            flexDirection: ["column", "row"],
            alignItems: [null, "center"],
            width: ["100%", "auto"]
          }}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/blog`,
              title: `Blog`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              sx={{
                color: "primary",
                display: ["block", "inline-block"],
                mt: [2, 0],
                ml: [0, 3],
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": { color: "text" }
              }}
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
