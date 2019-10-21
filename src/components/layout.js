import PropTypes from "prop-types";
import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./header";

function Layout({ children }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "text"
      }}
    >
      <Header />
      <main sx={{ display: "flex", flexBasis: 0, flexGrow: 1 }}>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
