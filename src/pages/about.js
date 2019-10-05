import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import cvIllustration from "../images/undraw_online_cv.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col md:flex-row items-center md:justify-center">
        <div className="md:w-1/3 md:mr-8">
          <blockquote className="border-l-4 border-gray-900 text-gray-800 leading-loose pl-4 text-justify">
            I'm a JS front-end developer with 7 years of experience. I like to
            think and work on front-end problematics, which are specific to web
            interfaces (front performance, ui, ux...). I also have a solid
            experience on ReactJS technology and its ecosystem. I worked for
            large french companies (Oui.sncf, Engie) and websites with high
            traffic (jeuxvideo.com). Code quality is a strong value for me, I
            always keep in mind the maintainability of the code I write.
          </blockquote>
        </div>

        <figure className="w-2/3 md:w-1/3">
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
