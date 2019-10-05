import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import patternBg from "../images/taieri.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section
        className="flex flex-col lg:flex-row text-center w-full"
        style={{ backgroundImage: { patternBg } }}
      >
        <h2 className="flex font-bold inline-block items-center my-8 p-10 text-5xl text-gray-700 lg:w-1/2">
          Hi, I'm Florent. A freelance front-end developper based in Paris.
        </h2>

        <div
          className="lg:w-1/2"
          style={{ backgroundImage: `url(${patternBg})` }}
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
