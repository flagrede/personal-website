import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";
import { base } from "@theme-ui/presets";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...base.colors,
    text: "#4a5568"
  },
  sizes: {
    container: 800
  }
};
