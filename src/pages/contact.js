import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="flex mx-auto">
        <div className="text-center">
          <p className="leading-loose mb-8 font-bold text-gray-900 text-3xl">
            Work with me !
          </p>

          <a
            className="border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white"
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
